
const Contenedor = require('./clase-contenedor.js');
const productos = new Contenedor('./productos.txt')

const test = async () =>{
    console.log('Paso 2 (Muestra todo el contenido) =', await productos.getAll())
}
test()


