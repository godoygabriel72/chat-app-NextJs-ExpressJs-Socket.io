import { useEffect, useState } from 'react'
import io from'socket.io-client'

import Layout from '../components/layout'
import Chats from '../components/chats'
import MessageInput from '../components/messageInput'
import useGetAll from '../hooks/useGetAll'

const Home = () => {

    const socket = io('http://localhost:3001/')
    const [listMessages, setListMessages] = useState([])
    const _messages = useGetAll('/messages')

    socket.on('server:renderMessage', data => {
        console.log(data)
        setListMessages([...listMessages, data])
    })

    useEffect(() => {
        console.log(_messages)
    }, [_messages.statusCode])

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