'use client'
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet'
import { useEffect } from 'react'
import 'leaflet/dist/leaflet.css'

// Fix para los iconos de Leaflet
import L from 'leaflet'
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

function MapUpdater({ center, zoom }) {
  const map = useMap()
  
  useEffect(() => {
    if (center) {
      map.setView(center, zoom)
    }
  }, [center, zoom, map])
  
  return null
}

export default function MapView({ 
  geoData, 
  activeLayers, 
  center, 
  zoom,
  onFeatureClick 
}) {
  const getColor = (value) => {
    if (!value) return '#CCCCCC'
    return value > 80 ? '#800026' :
           value > 60 ? '#BD0026' :
           value > 40 ? '#E31A1C' :
           value > 20 ? '#FC4E2A' :
           value > 10 ? '#FD8D3C' :
           value > 5 ? '#FEB24C' :
           value > 2 ? '#FED976' :
                       '#FFEDA0'
  }

  const style = (feature) => {
    const value = feature.properties.valor
    return {
      fillColor: getColor(value),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    }
  }

  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      layer.bindTooltip(`
        <div class="p-1">
          <strong>${feature.properties.nombre}</strong><br/>
          Valor: ${feature.properties.valor || 'N/A'}
        </div>
      `)

      layer.on('click', () => {
        onFeatureClick(feature.properties)
      })
    }
  }

  return (
    <div className="w-full h-full" style={{ height: '100%', minHeight: '500px' }}>
      <MapContainer
        center={center || [40.4168, -3.7038]}
        zoom={zoom || 6}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        
        {activeLayers.pib && geoData?.pib && (
          <GeoJSON
            data={geoData.pib}
            style={style}
            onEachFeature={onEachFeature}
          />
        )}

        <MapUpdater center={center} zoom={zoom} />
      </MapContainer>
    </div>
  )
}
