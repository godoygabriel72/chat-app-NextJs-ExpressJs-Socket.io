import Head from 'next/head'
import io from'socket.io-client'
import { useEffect } from 'react'
import Layout from '../components/layout'
import Chats from '../components/chats'
import MessageInput from '../components/messageInput'

const Home = () => {

    useEffect(() => {
        const socket = io('http://localhost:3001/')
		socket.on('ping', () => {
            console.log('Escuchando')
            socket.emit('pong')
        })
    }, [])

    const handleSave = message => {
        console.log(message)
    }

    return (
        <>
            <Head>
                <link rel='icon' type='image/x-icon' href='/logo.png' />
            </Head>
            <Layout>
                    <Chats>

                    </Chats>
                    <MessageInput onSave={handleSave} />
            </Layout>
        </>
    )
}

export default Home