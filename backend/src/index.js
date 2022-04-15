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
const io = new WebSocketServer(server, { cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] } })

io.on('connection', (socket) => {
    socket.on('client:newMessage', newMessage => {
        const message = {id: uuid(), ...newMessage}
        messages.push(message)
        io.emit('server:renderMessage', message)
    })
})

app.get('/messages', (req, res) => {
    res.status(200).json(messages).end()
})

app.get('/users', (req, res) => {
    let usersList = []
    users.forEach( ({id, Nombre, Email}) => usersList.push({id, Nombre, Email}) )
    res.status(200).json(usersList).end()
})

app.post('/auth/signup', (req, res) => {
    setTimeout(async () => {
        const { Nombre, Email, Password } = req.body
        if(Nombre && Email && Password) {
            const PasswordHash = await encryptPassword(Password)
            const user = { id: uuid(), Nombre, Email, Password: PasswordHash }
            users.push(user)
            let userCopy = {...user }
            delete userCopy.Password
            res.status(200).json(userCopy).end()
        } else {
            res.status(400).json({ message: 'Nombre, Email y Password son campos requeridos' }).end()
        }
    }, 1000);
})

app.post('/auth/signin', (req, res) => {
    setTimeout(async () => {
        const { Email, Password } = req.body
        if(Email && Password) {
            const user = users.find(u => u.Email === Email)
            if(!user) return res.status(404).json({ message: 'Usuario no encontrado' }).end()
            const isCorrectPassword = await comparePassword(Password, user?.Password)
            if(isCorrectPassword) {
                let userCopy = {...user }
                delete userCopy.Password
                res.status(200).json(userCopy).end()
            } else {
                res.status(401).json({ message: 'Contraseña incorrecta' }).end()
            }
        } else {
            res.status(400).json({ message: 'Email y Password son campos requeridos' }).end()
        }
    }, 1000);
})

server.listen(3001)
console.log('Server on port 3001') 