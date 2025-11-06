# Mapa Económico

App Next.js + Tailwind + Leaflet con capas (PIB, paro, IPC, salarios, población) vía endpoints internos.

## Requisitos
- Node 18+
- npm o pnpm

## Instalación
npm install

## Desarrollo
npm run dev
# abre http://localhost:3000

## Build y producción
npm run build
npm start

## Estructura
/pages        # rutas Next.js (incluye /api/*)
/components   # UI: MapView, LayerToggle, Legend, YearSelector, SearchBox
/public       # assets
