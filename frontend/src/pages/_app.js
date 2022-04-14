import 'bootstrap/dist/css/bootstrap.css'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import Head from 'next/head'

import StaticPage from '../components/common/staticPage'
import userStore from '../store/userStore'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  const { user } = userStore()
  const router = useRouter()

  useEffect(() => {
    !user && router.push('login')
  }, [])

  return (user || router.pathname === '/registry' || router.pathname === '/login')? 
    <>
      <Head>
        <link rel='icon' type='image/x-icon' href='/logo.png' />
        <title>Chat App</title>
      </Head>
      <Component {...pageProps} />
    </> : 
    <StaticPage />
  
}

export default MyApp