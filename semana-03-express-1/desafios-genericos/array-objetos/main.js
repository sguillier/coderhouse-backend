
// Obtenga la siguiente información del array
// A) Los nombres de los productos en un string separados por comas.
// B) El precio total
// C) El precio promedio
// D) El producto con menor precio
// E) El producto con mayor precio
// F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola



const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]


const nombres = productos.map(e => e.nombre )
const precios = productos.map(e => e.precio )


resultados = {
    nombres:nombres.join(','),
    precioTotal:precios.reduce((total, p) => p+total, 0),
    promedio:precios.reduce((total, p) => p+total, 0)/precios.length,
    precioMin:precios.sort((a,b)=>a-b)[0],
    precioMax:precios.sort((a,b)=>b-a)[0],
    productoPrecioMin:productos.reduce((pMin, p) => pMin=(p.precio < pMin.precio)?p:pMin, productos[0]),
    productoPrecioMax:productos.reduce((pMax, p) => pMax=(p.precio > pMax.precio)?p:pMax, productos[0]),
}

console.log(resultados)
