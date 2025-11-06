import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Mapa Económico</title>
      </Head>
      {children}
    </>
  )
}
