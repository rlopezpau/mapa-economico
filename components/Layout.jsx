import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Mapa Económico</title>
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <style>{`
          .leaflet-container {
            height: 100vh;
            width: 100%;
          }
        `}</style>
      </Head>
      {children}
    </>
  )
}
