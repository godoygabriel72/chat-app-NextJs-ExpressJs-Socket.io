import { useEffect, useState } from 'react'
import io from'socket.io-client'

import { Chats, MessageInput} from '../components/home'
import useGetAll from '../hooks/useGetAll'
import Layout from '../components/layout'
import userStore from '../store/userStore'

const Home = () => {

    const [listMessages, setListMessages] = useState([])
    const {user} = userStore()
    const socket = io('http://localhost:3001/')
    const _messages = useGetAll('/messages')

    socket.on('server:renderMessage', data => {
        setListMessages([...listMessages, data])
    })

    useEffect(() => {
        (_messages.statusCode === 200) && setListMessages(_messages.data)
    }, [_messages.statusCode])

    const handleSave = message => {
        socket.emit('client:newMessage', { user: {id: user?.id, Nombre: user?.Nombre}, content: message })
    }

    return (
        <Layout>
            <Chats messages={listMessages} currentUser={user}/>
            <MessageInput onSave={handleSave} />
        </Layout>
    )
}

export default Home