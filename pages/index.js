import { useState } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'

const MapView = dynamic(() => import('../components/MapView'), { ssr: false })
const LayerToggle = dynamic(() => import('../components/LayerToggle'), { ssr: false })
const Legend = dynamic(() => import('../components/Legend'), { ssr: false })
const YearSelector = dynamic(() => import('../components/YearSelector'), { ssr: false })
const SearchBox = dynamic(() => import('../components/SearchBox'), { ssr: false })
const Layout = dynamic(() => import('../components/Layout'), { ssr: false })

const queryClient = new QueryClient()

const layers = {
  pib: 'PIB per cápita',
  paro: 'Tasa de paro',
  ipc: 'Índice IPC',
  salarios: 'Salarios medios',
  poblacion: 'Población'
}

function HomePage() {
  const [activeLayers, setActiveLayers] = useState({ pib: true })
  const [year, setYear] = useState(2023)
  const [mapCenter, setMapCenter] = useState([40.4168, -3.7038])
  const [mapZoom, setMapZoom] = useState(6)
  const [selectedFeature, setSelectedFeature] = useState(null)

  const { data: geoData, isLoading } = useQuery({
    queryKey: ['geoData', year],
    queryFn: async () => {
      const responses = await Promise.all([
        fetch(`/api/pib?year=${year}`).then(res => res.json()),
        fetch(`/api/paro?year=${year}`).then(res => res.json())
      ])
      
      return {
        pib: responses[0],
        paro: responses[1]
      }
    }
  })

  const handleLayerToggle = (layer) => {
    setActiveLayers(prev => ({
      ...prev,
      [layer]: !prev[layer]
    }))
  }

  const handleFeatureClick = (properties) => {
    setSelectedFeature(properties)
  }

  return (
    <Layout>
      <div className="h-screen flex flex-col">
        <div className="bg-white shadow-md p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Mapa Económico</h1>
          <div className="flex items-center space-x-4">
            <SearchBox onLocationSelect={setMapCenter} />
            <YearSelector year={year} onYearChange={setYear} />
            <a href="/fuentes" className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
              Fuentes
            </a>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="w-64 bg-gray-100 p-4 space-y-4 overflow-y-auto">
            <LayerToggle layers={layers} activeLayers={activeLayers} onToggle={handleLayerToggle} />
            {selectedFeature && (
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h4 className="font-bold mb-2">Información</h4>
                <p><strong>Nombre:</strong> {selectedFeature.nombre}</p>
                <p><strong>Valor:</strong> {selectedFeature.valor}</p>
                <p><strong>Año:</strong> {selectedFeature.año}</p>
              </div>
            )}
          </div>

          <div className="flex-1">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-lg">Cargando datos...</div>
              </div>
            ) : (
              <MapView
                geoData={geoData || {}}
                activeLayers={activeLayers}
                year={year}
                center={mapCenter}
                zoom={mapZoom}
                onFeatureClick={handleFeatureClick}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  )
}
