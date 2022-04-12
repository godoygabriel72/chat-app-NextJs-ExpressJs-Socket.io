import express from 'express'
import { Server as WebSocketServer } from 'socket.io'
import http from 'http'
import cors from 'cors'

const app = express()
const server = http.createServer(app)
const io = new WebSocketServer(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
})

app.use(express.static(__dirname + '/public'))
app.use(cors())

io.on('connection', (socket) => {
    console.log('Nueva Conexión: ', socket.id)

    socket.emit('ping')

    socket.on('pong', () => {
        console.log('pong')
    })
})

server.listen(3001)
console.log('Server on port 3000') 