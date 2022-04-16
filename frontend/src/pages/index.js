import { useEffect, useState } from 'react'

import { Chats, MessageInput} from '../components/home'
import useGetAll from '../hooks/useGetAll'
import userStore from '../store/userStore'
import useSocket from '../hooks/useSocket'
import Layout from '../components/layout'

const Home = () => {    //402E58    745C9A

    const {data: messages, statusCode} = useGetAll('/messages')
    const [listMessages, setListMessages] = useState([])
    const socket = useSocket('http://localhost:3001/')
    const {user} = userStore()

    socket && socket.on('server:renderMessage', data => {
        setListMessages([...listMessages, data])
    })

    socket && socket.on('server:loadMessages', data => {
        setListMessages(data)
    })

    const handleSaveMessage = message => {
        socket.emit('client:newMessage', { user: {id: user?.id, Nombre: user?.Nombre}, content: message })
    }

    const handleDeleteMessage = message => {
        socket.emit('client:deleteMessage', message)
    }

    useEffect(() => {
        (statusCode === 200) && setListMessages(messages)
    }, [statusCode])

    return (
        <Layout>
            <Chats messages={listMessages} currentUser={user} onDelete={handleDeleteMessage} />
            <MessageInput onSave={handleSaveMessage} />
        </Layout>
    )
}

export default Home