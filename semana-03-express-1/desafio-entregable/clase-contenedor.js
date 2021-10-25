
//
//
//
// Clase de manejo de archivos creada para la semana 2.
//


const fs = require('fs')


class Contenedor {
    constructor(rutaArchivo) {
        this.rutaArchivo = rutaArchivo
    }


    getAll = async () => {
        try{
            // Extraemos info de archivo.txt y lo convertimos en array
            const file = await fs.promises.readFile(this.rutaArchivo, 'utf-8')
            const arrayItems = JSON.parse(file)
            
            // Devolvemos el array
            return arrayItems
        } catch(err){
            // Creamos el archivo si no existe
            await fs.promises.writeFile(this.rutaArchivo, '[]')
            const file = await fs.promises.readFile(this.rutaArchivo, 'utf-8')
            const arrayItems = JSON.parse(file)
            
            // Devolvemos el array
            return arrayItems
        }
    }
    

    getById = async (id) => {
        // Utilizamos Funcion getAll
        const arrayItems = await this.getAll()
        
        // Obtenemos el elemento del array con id solicitado
        const item = arrayItems.find(e => e.id === id)
        
        // Devolvemos el objeto si existe si no null
        return item ? item : null
    }


    save = async (nuevoItem) => {
        // Utilizamos Funcion getAll
        const arrayItems = await this.getAll()
        
        // Definimos nuevo Id y lo incluimos al objeto recibido
        const Ids = arrayItems.map(e => e.id)
        const nuevoId = Math.max(...Ids, 0) + 1
        nuevoItem['id'] = nuevoId

        // Incluimos el nuevo item en array
        arrayItems.push(nuevoItem)

        //Volcamos el array en archivo
        const arrayJSON = JSON.stringify(arrayItems, null, 2)
        await fs.promises.writeFile(this.rutaArchivo, arrayJSON)

        // Devolvemos el nuevo Id
        return nuevoId
    }


    deleteById = async (id) => {
        // Utilizamos Funcion getAll
        const arrayItems = await this.getAll()
        
        // Eliminamos el item del array
        const newArrayItems = arrayItems.filter(e => e.id !== id)

        //Volcamos el array en archivo
        const arrayJSON = JSON.stringify(newArrayItems, null, 2)
        await fs.promises.writeFile(this.rutaArchivo, arrayJSON)

        // Devolvemos nada
    }


    deleteAll = async () => {
        //Escribimos archivo vacio
        await fs.promises.writeFile(this.rutaArchivo, '[]')

        // Devolvemos nada
    }
}

module.exports = Contenedor


//
//
//
//
//
// Definimos algunos objetos para hacer pruebas
// const itemA = {
//     title: 'Cinta de medir',
//     price: 560,
//     thumbnail: 'https://cdn1.iconfinder.com/data/icons/construction-tool-line-foreman-equipment/512/Measuring_tape-512.png',
// }
// const itemB = {
//     title: 'Martillo',
//     price: 890,
//     thumbnail: 'https://cdn1.iconfinder.com/data/icons/construction-tool-line-foreman-equipment/512/Hammer-512.png',
// }
// const itemC = {
//     title: 'Serrucho',
//     price: 1200,
//     thumbnail: 'https://cdn1.iconfinder.com/data/icons/construction-tool-line-foreman-equipment/512/Saw-512.png',
// }
// const itemD = {
//     title: 'Atornillador',
//     price: 480,
//     thumbnail: 'https://cdn1.iconfinder.com/data/icons/construction-tool-line-foreman-equipment/512/Screwdriver-512.png',
// }




// //
// //
// //
// //
// //
// // Zona De Pruebas
// const productos = new Contenedor('./productos.txt')
// const test = async () =>{
//     console.log('Paso 1 (Borra Todo)', await productos.deleteAll())
//     console.log('Paso 2 (Muestra todo el contenido) =', await productos.getAll())
//     console.log('Paso 3 (Guarda ItemA):', await productos.save(itemA))
//     console.log('Paso 4 (Guarda ItemB):', await productos.save(itemB))
//     console.log('Paso 5 (Guarda ItemC):', await productos.save(itemC))
//     console.log('Paso 6 (Guarda ItemD):', await productos.save(itemD))
    
//     // console.log('Paso 6 (Muestra todo el contenido) =', await productos.getAll())
//     // console.log('Paso 7 (Borra id=1)', await productos.deleteById(1))
//     // console.log('Paso 8 (Borra id=4)', await productos.deleteById(4))
//     // console.log('Paso 9 (Muestra todo el contenido) =', await productos.getAll())
//     // console.log('Paso 10 (Guarda ItemD):', await productos.save(itemD))
//     // console.log('Paso 11 (Muestra todo el contenido) =', await productos.getAll())
//     // console.log('Paso 12 (Muestra id=1)', await productos.getById(1))
//     // console.log('Paso 13 (Muestra id=2)', await productos.getById(2))
// }
// test()


