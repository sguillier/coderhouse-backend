import { Router } from 'express'
import { fork } from 'child_process'
import calculoLento from '../fork/calculoLento.js'


const routerRandoms = Router()


routerRandoms.get('/bloqueante', (req, res) => {
    const resultado = calculoLento()
    res.json({ resultado })
})


routerRandoms.get('/', (req, res) => {
    const computo = fork('./src/fork/childProcess.js')

    computo.on('message', msg => {
        if (msg == 'listo') {

            computo.send('start')
            computo.on('message', resultado => {
                res.json({ resultado })
            })
        } else {
            // console.log(`Mensaje del hijo: ${msg}`)
            console.log(`Fin`)
        }
    })
})

export default routerRandoms
