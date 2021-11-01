const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)


app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

const PORT = 8080
httpServer.listen(PORT, () => console.log('SERVER ON'))


io.on('connection', socket => {
    socket.emit('msgPush', 'Hemos establecido conccion')

    socket.on('msgPull', data => {
        console.log(data)
        io.sockets.emit('chat', data)
    })
})




