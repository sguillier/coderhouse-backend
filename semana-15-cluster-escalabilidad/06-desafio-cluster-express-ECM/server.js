// Para instalar forever 


// comandos powershell
// tasklist /fi "imagename eq node.exe" -> lista todos los procesos de node.js activos
// taskkill /pid numpid /f -> mata un proceso por su número de PID

// comandos bash
// fuser <PORT>/tcp [-k] -> encuentra [y mata] al proceso ocupando el puerto PORT


import cluster from 'cluster'
import express from 'express'
import numCPUs from 'os'
const Ncpus = numCPUs.cpus().length
const app = express()


/* --------------------------------------------------------------------------- */
/* MASTER */
if (cluster.isPrimary) {
    console.log(Ncpus)
    console.log(`PID MASTER ${process.pid}`)

    for (let i = 0; i < Ncpus; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
        cluster.fork()
    })
}
/* --------------------------------------------------------------------------- */
/* WORKERS */
else {
    //console.log(parseInt(process.argv[2]))
    const PORT = parseInt(process.argv[2]) || 8080

    app.get('/', (req, res) => {
        res.send(`Servidor express en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
    })

    app.listen(PORT, err => {
        if (!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
    })
}
