import { Server as WebSocketServer } from 'socket.io'
import { v4 as uuid } from 'uuid'
import express from 'express'
import http from 'http'
import cors from 'cors'

import { encryptPassword, comparePassword } from './utils'

const messages = []
const users = []

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

const server = http.createServer(app)
const io = new WebSocketServer(server, {
    cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] }
})

io.on('connection', (socket) => {
    socket.on('client:newMessage', newMessage => {
        const message = {id: uuid(), ...newMessage}
        socket.emit('server:renderMessage', message)
        messages.push(message)
    })
})

app.get('/messages', (req, res) => {
    res.status(200).json(messages).end()
})

app.get('/users', (req, res) => {
    const usersList = []
    users.forEach(
        ({id, Nombre, Email}) => usersList.push({id, Nombre, Email})
    )
    res.status(200).json(usersList).end()
})

app.post('/auth/singin', (req, res) => {
    const { Nombre, Email, Password } = req.body
    if(Nombre && Email && Password) {
        const PasswordHash = encryptPassword(Password)
        const user = { id: uuid(), Nombre, Email, Password: PasswordHash }
        users.push(user)
        delete user.Password
        res.status(200).json(user).end()
    } else {
        res.status(400).json({ message: 'Nombre, Email y Password son campos requeridos' }).end()
    }
})

server.listen(3001)
console.log('Server on port 3001') 