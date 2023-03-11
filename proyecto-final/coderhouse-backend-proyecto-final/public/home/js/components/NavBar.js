import { URL_RAIZ } from "../../../url/index.js"
import EnviaCarrito from "./EnviaCarrito.js"
import IngresaProducto from "./IngresaProducto.js"
import Productos from "./Productos.js"
import Ordenes from "./Ordenes.js"


const NavBar = async (user) => {

    let html = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <img class="chat-img" src=${user.avatar}>
        <a class="navbar-brand" href="#">Hola ${user.firstname}</a>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            
            <li class="nav-item">
                <a id="link-ingresa-producto" class="nav-link">Ingresa Producto</a>
            </li>
            
            <li class="nav-item">
                <a id="link-productos" class="nav-link">Productos</a>
            </li>

            <li class="nav-item">
                <a id="link-envia-carrito" class="nav-link">Enviar Carrito</a>
            </li>

            <li class="nav-item">
                <a id="link-ordenes" class="nav-link">Ordenes</a>
            </li>

            <li class="nav-item">
                <a id="link-chat" class="nav-link">Chat</a>
            </li>

        </ul>
        </div>
        <div>
            <button id="button-logout" type="button" class="btn btn-primary">Salir</button>
        </div>
      </nav>`


    document.getElementById('NavBar').innerHTML = html

    const linkProductos = document.getElementById('link-productos')
    linkProductos.addEventListener('click', () => {
        Productos()
    })

    const linkIngresaProducto = document.getElementById('link-ingresa-producto')
    linkIngresaProducto.addEventListener('click', () => {
        IngresaProducto()
    })

    const linkEnviaCarrito = document.getElementById('link-envia-carrito')
    linkEnviaCarrito.addEventListener('click', () => {
        EnviaCarrito()
    })

    const linkOrdenes = document.getElementById('link-ordenes')
    linkOrdenes.addEventListener('click', () => {
        Ordenes()
    })

    const linkChat = document.getElementById('link-chat')
    linkChat.addEventListener('click', () => {
        window.location.href = URL_RAIZ + "/chat";
    })


    const botonLogOut = document.getElementById("button-logout")
    botonLogOut.addEventListener('click', async () => {
        const request = await fetch(URL_RAIZ + '/api/auth/logout')
        html = `
            <div class="session-display-content">
                <h2> Adios!! </h2>
            </div>`
        document.getElementById('main').innerHTML = html
        setTimeout(
            () => { window.location.href = URL_RAIZ + "" }, 1000
        )
    })


}

export default NavBar
