
const http = require('http')

const server = http.createServer((peticion, respuesta) => {
   const ahora = new Date
   const hora = ahora.getHours()
   let mensaje
   if (hora > 6 && hora <= 12) { mensaje = 'Que Tengas Buenos Días' }
   if (hora > 12 && hora <= 19) { mensaje = 'Que Tengas Buenas Tardes' }
   if (hora > 20 && hora <= 5) { mensaje = 'Que Tengas Buenas Noches' }

   const { url, method } = peticion
   console.log(method, url)
   
   if (url == '/' && method == 'GET') {
      respuesta.end(`Hola Mundo desde node HTTP \n ${mensaje}`)
   }

   if (url == '/miscosas' && method == 'GET') {
      respuesta.end('accediendo a mis cosas!')
   }
   
   console.log(method, url)
})

const connectedServer = server.listen(8080, () => {
   console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})


