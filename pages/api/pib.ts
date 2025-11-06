import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const year = Number(req.query.year ?? 2023)
  const features = [
    {
      type: "Feature",
      properties: { nombre: "València", codigo: "46250", valor: 28000, año: year },
      geometry: { type: "Polygon", coordinates: [] } // placeholder
    }
  ]
  res.status(200).json({ type: "FeatureCollection", features })
}
