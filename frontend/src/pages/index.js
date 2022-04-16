import { useEffect, useState } from 'react'

import { Chats, MessageInput} from '../components/home'
import useGetAll from '../hooks/useGetAll'
import userStore from '../store/userStore'
import useSocket from '../hooks/useSocket'
import Layout from '../components/layout'
import usePut from '../hooks/usePut'

const Home = () => { 

    const _messagesGet = useGetAll('/messages')
    const _usersPut = usePut('users')
    const [listMessages, setListMessages] = useState([])
    const socket = useSocket('http://localhost:3001/')
    const {user, setUser} = userStore()

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

    const handleChangeUserIcon = iconName => {
        const setedUser = {...user}
        setedUser.Avatar = iconName
        setUser(setedUser)
        _usersPut.fetch(setedUser, setedUser.id)
    }

    useEffect(() => {
        (_messagesGet.statusCode === 200) && setListMessages(_messagesGet.messages)
    }, [_messagesGet.statusCode])

    return (
        <Layout onChangeUserIcon={handleChangeUserIcon}>
            <Chats messages={listMessages} currentUser={user} onDelete={handleDeleteMessage} />
            <MessageInput onSave={handleSaveMessage} />
        </Layout>
    )
}

export default Home