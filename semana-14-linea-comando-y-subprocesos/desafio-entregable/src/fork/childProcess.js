import calculoLento from './calculoLento.js'

process.on('exit', () => {
    console.log(`worker #${process.pid} cerrado`)
})

process.on('message', msg => {
    console.log(`worker #${process.pid} iniciando su tarea`)
    const vector = calculoLento()
    process.send(vector)
    console.log(`worker #${process.pid} finalizó su trabajo`)
    process.exit()
})


process.send('listo')
