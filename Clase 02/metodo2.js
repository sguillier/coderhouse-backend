
//
//
//
// Metodo 2 (UNA ALTERNATIVA UN POCO MAS SIMPLE)
// Utiliza las funciones readFileSync y writeFileSync
// Las cuales por defecto son bloqueantes lo que facilita el desarrollo del codigo
// Estoy cosciente de que no siempre existe esta posibilidad, de conseguir funciones bloqueantes, por ello el "metodo 1" es más generico 
//



const fs = require('fs')


class Contenedor {
    constructor(rutaArchivo) {
        this.rutaArchivo = rutaArchivo
    }


    getAll() {
        // Extraemos info de archivo.txt y lo convertimos en array
        const file = fs.readFileSync(this.rutaArchivo)
        const arrayItems = JSON.parse(file)

        // Devolvemos el array
        return arrayItems
    }


    getById(id) {
        // Extraemos info de archivo.txt y lo convertimos en array
        const file = fs.readFileSync(this.rutaArchivo)
        const arrayItems = JSON.parse(file)

        // Obtenemos el elemento del array con id solicitado
        const item = arrayItems.find(e => e.id === id)

        // Devolvemos el objeto si existe si no null
        return item ? item : null
    }


    save(nuevoItem) {
        // Extraemos info de archivo.txt y lo convertimos en array
        const file = fs.readFileSync(this.rutaArchivo)
        const arrayItems = JSON.parse(file)

        // Definimos nuevo Id y lo incluimos al objeto recibido
        const Ids = arrayItems.map(e => e.id)
        const nuevoId = Math.max(...Ids, 0) + 1
        nuevoItem['id'] = nuevoId

        // Incluimos el nuevo item en array
        arrayItems.push(nuevoItem)

        //Volcamos el array en archivo
        const arrayJSON = JSON.stringify(arrayItems, null, 2)
        fs.writeFileSync(this.rutaArchivo, arrayJSON)

        // Devolvemos el nuevo Id
        return nuevoId
    }


    deleteById(id) {
        // Extraemos info de archivo.txt y lo convertimos en array
        const file = fs.readFileSync(this.rutaArchivo)
        const arrayItems = JSON.parse(file)

        // Eliminamos el item del array
        const newArrayItems = arrayItems.filter(e => e.id !== id)

        //Volcamos el array en archivo
        const arrayJSON = JSON.stringify(newArrayItems, null, 2)
        fs.writeFileSync(this.rutaArchivo, arrayJSON)

        // Devolvemos nada
    }


    deleteAll(id) {
        //Escribimos archivo vacio
        fs.writeFileSync(this.rutaArchivo, '[]')

        // Devolvemos nada
    }
}




//
//
//
//
//
// Definimos algunos objetos para hacer pruebas
const itemA = {
    title: 'Cinta de medir',
    price: 560,
    thumbnail: 'https://cdn1.iconfinder.com/data/icons/construction-tool-line-foreman-equipment/512/Measuring_tape-512.png',
}
const itemB = {
    title: 'Martillo',
    price: 890,
    thumbnail: 'https://cdn1.iconfinder.com/data/icons/construction-tool-line-foreman-equipment/512/Hammer-512.png',
}
const itemC = {
    title: 'Serrucho',
    price: 1200,
    thumbnail: 'https://cdn1.iconfinder.com/data/icons/construction-tool-line-foreman-equipment/512/Saw-512.png',
}
const itemD = {
    title: 'Atornillador',
    price: 480,
    thumbnail: 'https://cdn1.iconfinder.com/data/icons/construction-tool-line-foreman-equipment/512/Screwdriver-512.png',
}





//
//
//
//
//
// Zona De Pruebas
const productos = new Contenedor('./productos.txt')
console.log('Paso 1 (Borra Todo)', productos.deleteAll())
console.log('Paso 2 (Muestra todo el contenido) =', productos.getAll())
console.log('Paso 3 (Guarda ItemA):', productos.save(itemA))
console.log('Paso 4 (Guarda ItemB):', productos.save(itemB))
console.log('Paso 5 (Guarda ItemC):', productos.save(itemC))
console.log('Paso 6 (Muestra todo el contenido) =', productos.getAll())
console.log('Paso 7 (Borra id=1)', productos.deleteById(1))
console.log('Paso 8 (Borra id=4)', productos.deleteById(4))
console.log('Paso 9 (Muestra todo el contenido) =', productos.getAll())
console.log('Paso 10 (Guarda ItemD):', productos.save(itemD))
console.log('Paso 11 (Muestra todo el contenido) =', productos.getAll())
console.log('Paso 12 (Muestra id=1)', productos.getById(1))
console.log('Paso 13 (Muestra id=2)', productos.getById(2))





