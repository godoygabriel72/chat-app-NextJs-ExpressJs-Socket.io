import Head from 'next/head'
import io from'socket.io-client'
import { useEffect } from 'react'
import Layout from '../components/layout'

const Home = () => {

    useEffect(() => {
        const socket = io('http://localhost:3001/')
		socket.on('ping', () => {
            console.log('Escuchando')
            socket.emit('pong')
        })
    }, [])

    return (
        <>
            <Head>
                <link rel='icon' type='image/x-icon' href='/logo.png' />
            </Head>
            <Layout>
                <h1>Hola Mundo</h1>
            </Layout>
        </>
    )
}

export default Home