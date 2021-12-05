
//
// Aqui indicamos que tipo de persistencia usamos
const persistencia = 'txt'
// const persistencia = 'mongoose'
// const persistencia = 'firebase'
// const persistencia = 'memoria'



//
// Configuracion de persistencia en File System
const txtConfig = {
    fileName: {
        productos: 'productos.txt',
        usuarios: 'usuarios.txt',
        carritos: 'carritos.txt',
    }
}


//
// Configuracion de persistencia con Mongoose
const mongooseConfig = {
    esquema: {
        productos: {
            id: { type: Number, required: true },
            nombre: { type: String, required: true },
            precio: { type: Number, required: true },
            url: { type: String, required: false },
        },
        usuarios: {
            id: { type: Number, required: true },
            name: { type: String, required: true },
            lastName: { type: String, required: true },
            email: { type: String, required: true },
            privilegios: { type: String, required: true },
        },
        carritos: {
            id: { type: Number, required: true },
            userId: { type: Number, required: false },
            productos: { type: Array, required: true },
            creado: { type: String, required: true },
            modificado: { type: String, required: true },
            total: { type: Number, required: true },
        },
    },
}


export {persistencia, txtConfig, mongooseConfig}
