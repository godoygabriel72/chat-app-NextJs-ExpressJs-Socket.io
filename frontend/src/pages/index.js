import NavBar from '../components/navBar'
import Head from 'next/head'

const Home = () => {
    return (
        <>
            <Head>
                <link rel='icon' type='image/x-icon' href='/logo.png' />
            </Head>
            <NavBar />
        </>
    )
}

export default Home