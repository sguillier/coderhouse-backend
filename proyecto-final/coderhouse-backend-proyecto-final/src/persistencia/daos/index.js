import { persistencia, txtConfig } from './configDaos.js'


export default async function getColeccion(nombreColeccion) {

    let objetoColeccion

    switch (persistencia) {
        case 'txt':
            const { default: ContenedorArchivo } = await import('./../contenedores/ContenedorArchivo.js')
            objetoColeccion = new ContenedorArchivo(txtConfig.fileName[nombreColeccion])
            break

        case 'mongodb':
            const { default: ContenedorMongoDb } = await import('../contenedores/ContenedorMongoDb.js')
            objetoColeccion = new ContenedorMongoDb(nombreColeccion)
            break

        case 'firebase':
            const { default: ContenedorFirebase } = await import('../contenedores/ContenedorFirebase.js')
            objetoColeccion = new ContenedorFirebase(nombreColeccion)
            break

        default:
            const { default: ContenedorMemoria } = await import('./../contenedores/ContenedorMemoria.js')
            objetoColeccion = new ContenedorMemoria()
            break
    }
    return objetoColeccion
}

