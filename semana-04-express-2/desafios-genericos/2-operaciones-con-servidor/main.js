const express = require('express')
const app = express()
const PORT = 8080


const test = () =>{
    
    app.get('/', (req, res) => {
        res.send({ mensaje: 'hola mundo' })
    })

    app.get('/api/sumar/:num1/:num2', (req, res) => {
        const { num1, num2 } = req.params
        res.send({ suma: Number(num1) + Number(num2) })
    })
    
    app.get('/api/sumar', (req, res) => {
        const { num1, num2 } = req.query
        res.send({ suma: Number(num1) + Number(num2) })
    })
    
    app.get('/api/sumar/:operacion', (req, res) => {
        const { operacion } = req.params
        res.send({ operacion: eval(operacion) })
    })
    
    app.post('/api', (req, res) => {
        res.send('ok post')
    })
    
    app.put('/api', (req, res) => {
        res.send('ok put')
    })
    
    app.delete('/api', (req, res) => {
        res.send('ok delete')
    })
    
    

    
    const server = app.listen(PORT, () => {
        console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
    })
    server.on("error", error => console.log(`Error en servidor ${error}`))


    
}
test()

