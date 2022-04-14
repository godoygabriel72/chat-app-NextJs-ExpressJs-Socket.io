import { useEffect, useState } from 'react'
import io from'socket.io-client'

import { Chats, MessageInput} from '../components/home'
import useGetAll from '../hooks/useGetAll'
import Layout from '../components/layout'

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