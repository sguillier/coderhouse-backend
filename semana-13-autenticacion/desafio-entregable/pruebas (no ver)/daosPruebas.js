import claseProductos from './../src/daos/claseProductos.js'
const productos = new claseProductos()

console.log('Productos --------------------------------------------------------------------------------------------------------------')
console.log(await productos.getAllProducts())
console.log(await productos.deleteAllProducts())


const producto1 = {
    id: 1,
    nombre: "Calculadora",
    precio: "123",
    url: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-512.png",
}

const producto2 = {
    id: 2,
    nombre: "Mochila",
    precio: "569",
    url: "https://cdn3.iconfinder.com/data/icons/education-209/64/bag-pack-container-school-256.png",
}


console.log(await productos.saveProduct(producto1))
console.log(await productos.saveProduct(producto2))
console.log(await productos.getAllProducts())


import claseCarritos from './../src/daos/claseCarritos.js'
const carritos = new claseCarritos()

console.log('Carritos --------------------------------------------------------------------------------------------------------------')
console.log(await carritos.getAllCarts())
console.log(await carritos.deleteAllCarts())


const carrito1 = {
    id: 1,
    creado: "5/12/2021 13:28:15",
    modificado: "5/12/2021 13:33:15",
    productos: [{ ...producto1, q: 4}, {  ...producto2, q: 4 } ],
    total: producto1.precio*4 +  producto2.precio*4
}

const carrito2 = {
    id: 2,
    creado: "5/12/2021 13:28:15",
    modificado: "5/12/2021 13:33:15",
    productos: [{ ...producto1, q: 5}, {  ...producto2, q: 0 } ],
    total: producto1.precio*5 +  producto2.precio*0
}

const carrito3 = {
    id: 3,
    creado: "5/12/2021 13:28:15",
    modificado: "5/12/2021 13:33:15",
    productos: [{ ...producto1, q: 8}, {  ...producto2, q: 1 } ],
    total: producto1.precio*8 +  producto2.precio*1
}

console.log(await carritos.saveCart(carrito1))
console.log(await carritos.saveCart(carrito2))
console.log(await carritos.saveCart(carrito3))
console.log(await carritos.getAllCarts())



import claseUsuarios from './../src/daos/claseUsuarios.js'
const usuarios = new claseUsuarios()

console.log('Usuarios --------------------------------------------------------------------------------------------------------------')
console.log(await usuarios.getAllUsers())
await usuarios.deleteAllUsers()

const usuario1 = {
    id: 1,
    nombre: 'Sebastian',
    apellido: 'Guillier',
    email: 'sebastian@correo.com',
    rol: 'buyer',
}

await usuarios.saveUser(usuario1)
console.log(await usuarios.getAllUsers())

await usuarios.setUserRolById(1, 'admin')
console.log(await usuarios.getAllUsers())