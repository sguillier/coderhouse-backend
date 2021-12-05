

import claseProductos from './daos/claseProductos.js'
const productos = new claseProductos()


const itemA = { title: 'ItemA', price: 560, }
const itemB = { title: 'ItemB', price: 890, }
const itemC = { title: 'ItemC', price: 1200, }
const itemD = { title: 'ItemD', price: 480, }
const itemE = { title: 'ItemE', price: 690, }


console.log('MuestraTodo =', await productos.mostrarTodo())
console.log('guardarPorId(itemA):', await productos.guardarPorId(itemA))
console.log('MuestraTodo =', await productos.mostrarTodo())


console.log("Estoy vivo")




