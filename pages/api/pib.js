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
          valor: 85.5,
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
          valor: 78.2,
          año: parseInt(year),
          fuente: "https://www.ine.es"
        },
        geometry: {
          type: "Point",
          coordinates: [2.1734, 41.3851]
        }
      },
      {
        type: "Feature",
        properties: {
          nombre: "Valencia",
          codigo: "46",
          valor: 65.8,
          año: parseInt(year),
          fuente: "https://www.ine.es"
        },
        geometry: {
          type: "Point",
          coordinates: [-0.3763, 39.4699]
        }
      }
    ]
  }

  res.status(200).json(mockData)
}
