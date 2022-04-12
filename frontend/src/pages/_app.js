import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' type='image/x-icon' href='/logo.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp