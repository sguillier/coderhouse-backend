

import { URL_RAIZ } from "../../url/index.js"
const request = await fetch(URL_RAIZ + '/api/auth/isauth')
const res = await request.json()

if (res) {
    // NavBar(res)
} else {
    window.location.href = URL_RAIZ + "/login";
}


const linkHome = document.getElementById('link-home')
linkHome.addEventListener('click', () => {
    window.location.href = URL_RAIZ + "/home";
})

const botonLogOut = document.getElementById("button-logout")
botonLogOut.addEventListener('click', async () => {
    const request = await fetch(URL_RAIZ + '/api/auth/logout')
    const html = `
            <div class="session-display-content">
                <h2> Adios!! </h2>
            </div>`
    document.getElementById('main').innerHTML = html
    setTimeout(
        () => { window.location.href = URL_RAIZ + "" }, 1000
    )
})



// *************** Socket.io *******************//


const socket = io();

// update-chat
const formChat = document.getElementById('form-chat')
formChat.addEventListener('submit', e => {
    e.preventDefault()

    const hora = new Date()
    const mensaje = {
        text: document.getElementById('chat-msg').value,
        hora: '[' + hora.toLocaleString() + ']'
    }

    socket.emit('update-chat', mensaje);
    document.getElementById('chat-msg').value = ''
})

// render-chat
socket.on('chat', manejarEventoChat);
async function manejarEventoChat(chat) {

    const recursoRemoto = await fetch('hbs/chat.hbs')
    const textoPlantilla = await recursoRemoto.text()
    const functionTemplate = Handlebars.compile(textoPlantilla)

    const html = functionTemplate({ chat })
    document.getElementById('chat').innerHTML = html

}



// const Temp = async () => {
//     const request = await fetch('http://localhost:8080/api/auth')
//     const res = await request.json()

//     console.log(res)
//     if (res) {
//         html = `
//         <div class="session-display-content">
//             <h2> Bienvenido ${res.firstname} </h2>
//             <button id="logout-button">
//                 Cerrar Session
//             </button>

//         </div>`
//         document.getElementById('session-display').innerHTML = html
//         const botonLogOut = document.getElementById("logout-button")
//         botonLogOut.addEventListener('click', async () => {
//             const request = await fetch('http://localhost:8080/api/logout')
//             html = `
//             <div class="session-display-content">
//                 <h2> Adios!! </h2>
//             </div>`
//             document.getElementById('session-display').innerHTML = html
//             setTimeout(
//                 () => { window.location.href = "http://localhost:8080" }, 1000
//             )
//         })
//     } else {
//         window.location.href = "http://localhost:8080/login";
//     }
// }

// Temp()

