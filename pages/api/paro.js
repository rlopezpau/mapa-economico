export default function handler(req, res) {
  const { year = 2023 } = req.query
  
  const mockData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          nombre: "Madrid",
          codigo: "28",
          valor: 12.5,
          año: parseInt(year),
          fuente: "https://www.ine.es"
        },
        geometry: {
          type: "Point",
          coordinates: [-3.7038, 40.4168]
        }
      },
      {
        type: "Feature",
        properties: {
          nombre: "Barcelona",
          codigo: "08",
          valor: 14.2,
          año: parseInt(year),
          fuente: "https://www.ine.es"
        },
        geometry: {
          type: "Point",
          coordinates: [2.1734, 41.3851]
        }
      }
    ]
  }

  res.status(200).json(mockData)
}
