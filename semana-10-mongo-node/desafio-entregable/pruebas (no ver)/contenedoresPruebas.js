
import ContenedorArchivo from './../src/contenedores/ContenedorArchivo.js'
const productos = new ContenedorArchivo('./productos.txt')

// import ContenedorMemoria from './../src/contenedores/ContenedorMemoria.js'
// const productos = new ContenedorMemoria()

// const esquema = {
//     id: { type: Number, required: true },
//     title: { type: String, required: true },
//     price: { type: Number, required: true }
// }
// const nombreColeccion = 'productos'
// import ContenedorMongoDb from './../src/contenedores/ContenedorMongoose.js'
// const productos = new ContenedorMongoDb(nombreColeccion, esquema)

// import ContenedorFirebase from './../src/contenedores/ContenedorFirebase.js'
// const productos = new ContenedorFirebase('productos')



//
//
// Definimos algunos objetos para hacer pruebas
const itemA = { title: 'ItemA', price: 560, }
const itemB = { title: 'ItemB', price: 890, }
const itemC = { title: 'ItemC', price: 1200, }
const itemD = { title: 'ItemD', price: 480, }
const itemE = { title: 'ItemE', price: 690, }



//
//
// Pruebas
console.log('Paso 1 (Borra Todo)', await productos.deleteAll())
console.log('Paso 2 (Muestra todo el contenido) =', await productos.getAll())
console.log('Paso 3 (Guarda ItemA):', await productos.save(itemA))
console.log('Paso 4 (Guarda ItemB):', await productos.save(itemB))
console.log('Paso 5 (Guarda ItemC):', await productos.save(itemC))
console.log('Paso 6 (Muestra todo el contenido) =', await productos.getAll())
console.log('Paso 7 (Borra id=1)', await productos.deleteById(1))
console.log('Paso 8 (Borra id=4)', await productos.deleteById(4))
console.log('Paso 9 (Muestra todo el contenido) =', await productos.getAll())
console.log('Paso 10 (Guarda ItemD):', await productos.save(itemD))
console.log('Paso 11 (Muestra todo el contenido) =', await productos.getAll())
console.log('Paso 12 (Muestra id=1)', await productos.getById(1))
console.log('Paso 13 (Muestra id=2)', await productos.getById(2))
console.log('Paso 14 (Guarda ItemE en id=2)', await productos.saveById(2, itemE))
console.log('Paso 15 (Muestra Todo)', await productos.getAll())



