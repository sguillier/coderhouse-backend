import { URL_RAIZ } from "../../../url/index.js"

const EditaOrden = async (orden) => {

    // console.log(items)

    const arrayOrden = orden.productos
    let total = orden.total



    let html = ` <h2> Modificar Orden</h2> <br>
    <div class="cart-container">
    `

    arrayOrden.forEach(item => {
        html += `
        <div class="item-cart">
            <div class="item-cart-img-container">
            <img class="item-cart-img" src=${item.url}>
            </div>
            <div class="item-cart-detail-service">
                ${item.nombre}
                <br>
                $ ${item.precio} usd
            </div>
            <div class="item-cart-shopping">
            <div class="item-cart-quantity">
                    <button id="item-cart-button-mas-${item.id}" class="item-cart-add-button" >
                    +
                    </button>
                    <button id="item-cart-button-menos-${item.id}" class="item-cart-add-button" >
                        -
                        </button>
                        <div> 
                        Cantidad: <span id="item-cart-quantity-${item.id}"> ${item.q} </span> 
                        </div>
                    </div>
                    <hr />
                    <div class="item-cart-cost">
                        Costo: $ <span id="item-cart-costo-${item.id}"> ${item.precio * item.q} </span> usd
                    </div>
                    </div>
        </div>
        `

    });

    html += `
    <div>
        Total: $ <span id="cart-total"> ${total} </span> usd
    </div>
    <div>
        <button id="cart-button-send">Modifica Orden</button>
    </div>
    
    </div>`

    document.getElementById('main').innerHTML = html


    arrayOrden.forEach(item => {
        const botonMas = document.getElementById(`item-cart-button-mas-${item.id}`)
        botonMas.addEventListener('click', () => { agrega(item.id, 1) })

        const botonMenos = document.getElementById(`item-cart-button-menos-${item.id}`)
        botonMenos.addEventListener('click', () => { agrega(item.id, -1) })

    });

    const agrega = (id, num) => {
        const i = arrayOrden.findIndex(e => e.id === id)
        const quantity = arrayOrden[i].q

        if (0 <= (quantity + num)) {
            arrayOrden[i].q = quantity + num
            total += arrayOrden[i].precio * (num)

            document.getElementById(`item-cart-quantity-${id}`).innerText = quantity + num
            document.getElementById(`item-cart-costo-${id}`).innerText = arrayOrden[i].precio * (quantity + num)
            document.getElementById("cart-total").innerText = total
        }
    }

    const botonEnviar = document.getElementById("cart-button-send")
    botonEnviar.addEventListener('click', async () => {

        const ahora = new Date()
        const data = {
            creado: orden.creado,
            modificado: ahora.toLocaleString(),
            productos: arrayOrden,
            total: total
        }

        const urlApi = URL_RAIZ + '/api/ordenes/' + orden.id
        await fetch(urlApi, {
            method: 'PUT', // or 'POST'
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

        html = `
          <div>
              <h2>Orden editada con éxito</h2>
          </div>
          `
        document.getElementById('main').innerHTML = html

    })



}

export default EditaOrden
