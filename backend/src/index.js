import express from 'express'

const app = express()

app.use(express.static(__dirname + '/public'))

app.listen(3001)
console.log('Server on port 3000')