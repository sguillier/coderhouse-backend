
const socket = io()
socket.on('msgPush', data => {
    console.log(data)
})


const formulario = document.getElementById('form')
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById("name").value
    const msg = document.getElementById("msg").value
    socket.emit('msgPull', { name, msg })
    document.getElementById("msg").value = ''
    
})


socket.on('chat', arrayChat => {
    console.log(arrayChat)
    
    const html = arrayChat.map(e => `<p> <b> ${e.name} :</b> ${e.msg} </p>` );
    document.getElementById('chat').innerHTML = html.join('')
})

