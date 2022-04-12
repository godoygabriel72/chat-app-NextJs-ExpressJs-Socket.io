const socket = io('http://localhost:3001')
socket.on('ping', () => {
    console.log('Escuchado')
    socket.emit('pong')
})