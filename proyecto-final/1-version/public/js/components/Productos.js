import EditaProducto from './EditaProducto.js'


const Productos = async () => {

    const request = await fetch('http://localhost:8080/api/productos')
    const items = await request.json()
    console.log(items)


    let html = ` <h2> Productos </h2> <br>
    <div class="item-list-card-container">
    `
    items.forEach(item => {
        html += `
        <div class="item-card">
            <div class="item-card-img-container">
                <img class="item-card-img" src=${item.url}>
            </div>
            <div>
                ${item.nombre}
                <br>
                $ ${item.precio} usd
            </div>
            <div class="item-card-button-container">
                <button id="item-card-button-delete-${item.id}" class="item-card-button-delete">
                    Eliminar
                </button>
                <button id="item-card-button-edit-${item.id}" class="item-card-button-edit">
                    Editar
                </button>
            </div>
        </div>
        `

    });
    html += `</div>`
    document.getElementById('main').innerHTML = html



    const eliminar = async (id) => {
        const urlApi = 'http://localhost:8080/api/productos/' + id
        
        const response = await fetch(urlApi, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });

        Productos()
    }


    items.forEach(item => {
        const botonEliminar = document.getElementById(`item-card-button-delete-${item.id}`)
        botonEliminar.addEventListener('click', () => { eliminar(item.id) })

        const botonEditar = document.getElementById(`item-card-button-edit-${item.id}`)
        botonEditar.addEventListener('click', () => { EditaProducto(item) })
    })




}

export default Productos