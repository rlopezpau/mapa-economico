import Layout from '../components/Layout'

export default function Fuentes() {
  const sources = [
    {
      nombre: "PIB per cápita",
      fuente: "Instituto Nacional de Estadística (INE)",
      url: "https://www.ine.es",
      metodologia: "Producto Interior Bruto a precios de mercado per cápita"
    },
    {
      nombre: "Tasa de paro",
      fuente: "Instituto Nacional de Estadística (INE)",
      url: "https://www.ine.es",
      metodologia: "Tasa de desempleo según EPA (Encuesta de Población Activa)"
    }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Fuentes y Metodología</h1>
          
          <div className="space-y-6">
            {sources.map((source, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {source.nombre}
                </h2>
                <div className="space-y-2">
                  <p><strong>Fuente:</strong> {source.fuente}</p>
                  <p><strong>Metodología:</strong> {source.metodologia}</p>
                  <p>
                    <strong>Enlace:</strong>{' '}
                    <a 
                      href={source.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {source.url}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a 
              href="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Volver al mapa
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
