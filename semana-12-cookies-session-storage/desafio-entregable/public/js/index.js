const socket = io();


// update-productos
const formProducto = document.getElementById('form-producto')
formProducto.addEventListener('submit', e => {
    e.preventDefault()

    const producto = {
        nombre: document.getElementById('producto-nombre').value,
        precio: document.getElementById('producto-precio').value,
        url: document.getElementById('producto-url').value
    }

    socket.emit('update-productos', producto);
    formProducto.reset()
})


// render-productos
socket.on('productos', manejarEventoProductos);
async function manejarEventoProductos(productos) {

    const recursoRemoto = await fetch('hbs/productos.hbs')
    const textoPlantilla = await recursoRemoto.text()
    const functionTemplate = Handlebars.compile(textoPlantilla)

    const html = functionTemplate({ productos })
    document.getElementById('productos').innerHTML = html
}


// update-chat
const formChat = document.getElementById('form-chat')
formChat.addEventListener('submit', e => {
    e.preventDefault()

    const hora = new Date()
    const mensaje = {
        author: {
            mail: document.getElementById('chat-mail').value,
            nombre: document.getElementById('chat-nombre').value,
            edad: document.getElementById('chat-edad').value,
            alias: document.getElementById('chat-alias').value,
            apellido: document.getElementById('chat-apellido').value,
            avatar: document.getElementById('chat-avatar').value,
        },
        text: document.getElementById('chat-msg').value,
        hora: '[' + hora.toLocaleString() + ']'
    }

    socket.emit('update-chat', mensaje);
    document.getElementById('chat-msg').value = ''
})

// render-chat
socket.on('chat', manejarEventoChat);
async function manejarEventoChat(chatNormalized) {
    const chatDenormalized = await denormalizeChat(chatNormalized)
    const chat = chatDenormalized ? (await chatDenormalized.originalMensajes) : []

    const recursoRemoto = await fetch('hbs/chat.hbs')
    const textoPlantilla = await recursoRemoto.text()
    const functionTemplate = Handlebars.compile(textoPlantilla)

    const html = functionTemplate({ chat })
    document.getElementById('chat').innerHTML = html

    const compresion = Math.round(100 * JSON.stringify(chatNormalized).length / JSON.stringify(chat).length)
    document.getElementById('chat-title').innerText = 'El porcentaje de compresion es ' + compresion + '%'
}


const Temp = async () => {
    const request = await fetch('http://localhost:8080/api/session/state')
    const res = await request.json()

    console.log(res)
    if (res.state === 'on') {
        html = `
        <div class="session-display-content">
            <h2> Bienvenido ${res.nombre} </h2>
            <button id="logout-button">
                Cerrar Session
            </button>

        </div>`
        document.getElementById('session-display').innerHTML = html
        const botonLogOut = document.getElementById("logout-button")
        botonLogOut.addEventListener('click', async () => {
            const request = await fetch('http://localhost:8080/api/session/logout')
            html = `
            <div class="session-display-content">
                <h2> Adios!! </h2>
            </div>`
            document.getElementById('session-display').innerHTML = html
            setTimeout(
                () => {window.location.href = "http://localhost:8080"}, 3000
            )
        })
    } else {
        html = `
        <div class="session-display-content">
            <button id="login-button">
                Iniciar Sesion
            </button>

        </div>`
        document.getElementById('session-display').innerHTML = html
        const botonLogIn = document.getElementById("login-button")
        botonLogIn.addEventListener('click', async () => {
            window.location.href = "http://localhost:8080/login";
        })
    }
}

Temp()


