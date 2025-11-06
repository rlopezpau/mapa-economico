import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Mapa Económico</title>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      </Head>
      {children}
    </>
  )
}
