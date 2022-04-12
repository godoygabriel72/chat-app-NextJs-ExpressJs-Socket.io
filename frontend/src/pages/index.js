import { useEffect, useState } from 'react'
import io from'socket.io-client'

import Layout from '../components/layout'
import Chats from '../components/chats'
import MessageInput from '../components/messageInput'

const Home = () => {

    const socket = io('http://localhost:3001/')
    const [listMessages, setListMessages] = useState([])

    socket.on('server:renderMessage', data => {
        console.log(data)
        setListMessages([...listMessages, data])
    })

    const handleSave = message => {
        socket.emit('client:newMessage', { user: 'godoygabriel72', message })
    }

    return (
        <Layout>
            <Chats messages={listMessages}/>
            <MessageInput onSave={handleSave} />
        </Layout>
    )
}

export default Home