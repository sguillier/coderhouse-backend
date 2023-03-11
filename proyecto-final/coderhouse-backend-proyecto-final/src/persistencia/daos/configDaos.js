


//
// Aqui indicamos que tipo de persistencia usamos (hay que descomentar solo uno)
// const persistencia = 'txt'
// const persistencia = 'mongodb'
const persistencia = 'firebase'
// const persistencia = 'memoria'



//
// Configuracion de persistencia en File System
const txtConfig = {
    fileName: {
        productos: 'productos.txt',
        ordenes: 'ordenes.txt',
        usuarios: 'usuarios.txt',
        mensajes: 'mensajes.txt',
    }
}


export { persistencia, txtConfig }
