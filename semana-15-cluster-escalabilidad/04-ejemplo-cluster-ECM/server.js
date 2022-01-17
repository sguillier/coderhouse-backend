import cluster from 'cluster'
import http from 'http'
import numCPUs from 'os'
const Ncpus = numCPUs.cpus().length
// console.log(`Numero de CPUs: ${Ncpus}`)


if (cluster.isPrimary) {
    console.log(`PID MASTER ${process.pid}`)

    for (let i = 0; i < Ncpus; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`)
        // cluster.fork() // crea un nuevo worker si por algun motivo uno se cae
    })
} else {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end('Hola mundo!')
    }).listen(8000)

    console.log(`Worker ${process.pid} started`)
}
