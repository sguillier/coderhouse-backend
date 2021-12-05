
//
// Aqui indicamos que tipo de persistencia usamos
// const persistencia = 'txt'
// const persistencia = 'mongoose'
const persistencia = 'firebase'
// const persistencia = 'memoria'



//
// Configuracion de persistencia en File System
const txtConfig = {
    path: {
        productos: './DB/productos.txt',
        usuarios: './DB/usuarios.txt',
        carritos: './DB/carritos.txt',
    }
}


//
// Configuracion de persistencia con Mongoose
const mongooseConfig = {
    esquema: {
        productos: {
            id: { type: Number, required: true },
            title: { type: String, required: true },
            price: { type: Number, required: true },
            url: { type: String, required: false },
        },
        usuarios: {
            id: { type: Number, required: true },
            name: { type: String, required: true },
            lastName: { type: String, required: true },
            email: { type: String, required: true },
        },
        carritos: {
            id: { type: Number, required: true },
            userId: { type: Number, required: true },
            productos: { type: Array, required: true },
        },
    },
}


export {persistencia, txtConfig, mongooseConfig}
