
const socket = io()
socket.on('msgPush', data => {
    console.log(data)
})


const formulario = document.getElementById('form')
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.getElementById("input")
    socket.emit('msgPull', input.value)
})


socket.on('chat', arrayChat => {
    console.log(arrayChat)
    // let html = ''
    // arrayChat.forEach(e => { html += `<p> SocketId: ${e.socketId} -> Mensaje: ${e.mensaje} </p>` });
    
    const html = arrayChat.map(e => `<p> SocketId: ${e.socketId} -> Mensaje: ${e.mensaje} </p>` );
    //console.log(html.join(''))
    document.getElementById('chat').innerHTML = html.join('')
})


