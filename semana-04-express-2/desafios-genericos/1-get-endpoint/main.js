// npm i express


const express = require('express')
const app = express()
const PORT = 8080
const frase = 'Hola mundo como están'

const test = async () =>{
    
    app.get('/', (req, res) => {
        res.send({ mensaje: 'hola mundo' })
    })

    app.get('/letras/:num', (req, res) => {
        const num = req.params.num 
        
        if(Number(num)){
            if(num>0 && num<frase.length){
                res.send(frase[num])    
            }else{
                res.send({error:"El parámetro está fuera de rango"})
            }
        }else{
            res.send({error:"El parámetro no es numerico"})
        }
    })
    

    app.get('/palabras/:num', (req, res) => {
        const objeto = frase.split(' ')
        const num = req.params.num 
        
        if(Number(num)){
            if(num>0 && num<frase.length){
                res.send(objeto[num])    
            }else{
                res.send({error:"El parámetro está fuera de rango"})
            }
        }else{
            res.send({error:"El parámetro no es numerico"})
        }
    })

    
    const server = app.listen(PORT, () => {
        console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
    })
    server.on("error", error => console.log(`Error en servidor ${error}`))
    
}
test()
