
const Contenedor = require('./clase-contenedor.js');
const productos = new Contenedor('./productos.txt')


const express = require('express')
const app = express()
const PORT = 8080


const test = async () =>{
    const array = await productos.getAll()
    
    app.get('/', (req, res) => {
        res.send({ mensaje: 'hola mundo' })
    })

    app.get('/productos', (req, res) => {
        res.send(array)
    })
    
    app.get('/productoRandom', (req, res) => {
        const n = parseInt(Math.random()*(array.length))
        res.send(array[n])
    })
    

    
    const server = app.listen(PORT, () => {
        console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
    })
    server.on("error", error => console.log(`Error en servidor ${error}`))


    
}
test()



