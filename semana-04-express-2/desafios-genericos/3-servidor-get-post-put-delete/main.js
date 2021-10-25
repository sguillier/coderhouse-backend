const express = require('express')
const app = express()
const PORT = 8080
const frase = 'Frase Inicial'
const palabras = frase.split(' ')
        

//Esto para recibir formato JSON en el body
app.use(express.json())



const test = () => {

    app.get('/', (req, res) => {
        res.send({ mensaje: 'hola mundo' })
    })

    app.get('/api/frase', (req, res) => {
        res.send({ frase: palabras.join(' ') })
    })

    app.get('/api/palabras/:num', (req, res) => {
        const num = parseInt(req.params.num) - 1
        res.send({ buscada: palabras[num] })
    })

    // Para ver esto incluir en el body del post un objeto (JSON) con el atributo "palabra"
    app.post('/api/palabras', (req, res) => {
        const palabra = req.body.palabra
        palabras.push(palabra)
        res.json({ agregada: palabra, posicion: palabras.length })
    })

    // Lo mismo Aqui
    app.put('/api/palabras/:num', (req, res) => {
        const { palabra } = req.body
        const { num } = req.params
        const palabraAnt = palabras[ parseInt(num) - 1 ]
        palabras[ parseInt(num) - 1 ] = palabra
        res.json({ actualizada: palabra, anterior: palabraAnt })
    })
    
    app.delete('/api/palabras/:num', (req, res) => {
        const { num } = req.params
        const [ palabra ] = palabras.splice(parseInt(num) - 1, 1)
        res.json({ borrada: palabra })
    })

    const server = app.listen(PORT, () => {
        console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
    })
    server.on("error", error => console.log(`Error en servidor ${error}`))

}
test()

