

import express from 'express'

export default function main(){

    const app = express()

    //app.use(express.static('public'))

    const PORT = parseInt(process.argv[2]) || 8080

    app.get('/datos', (req,res) => {
        res.send(`Server en PORT(${PORT}) - PID(${process.pid}) - FYH(${new Date().toLocaleString()})`)
    })

    app.listen(PORT, err => {
        if(!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
    })
}
