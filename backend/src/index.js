import express from 'express'
import { Server as WebSocketServer } from 'socket.io'
import http from 'http'
import cors from 'cors'
import { v4 as uuid } from 'uuid'

const messages = []

const app = express()
app.use(cors())

const server = http.createServer(app)
const io = new WebSocketServer(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
})

io.on('connection', (socket) => {
    socket.on('client:newMessage', 
    newMessage => {
        const message = {id: uuid(), ...newMessage}
            socket.emit('server:renderMessage', message)
            messages.push(message)
        }
    )
})

server.listen(3001)
console.log('Server on port 3001') 