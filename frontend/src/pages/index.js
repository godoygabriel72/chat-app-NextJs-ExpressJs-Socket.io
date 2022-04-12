import NavBar from '../components/navBar'
import Head from 'next/head'
import fetch from'isomorphic-fetch'
import io from'socket.io-client'
import { useEffect } from 'react'

const Home = ({messages}) => {

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
            <NavBar />
            <h1>{messages}</h1>
        </>
    )
}

export default Home