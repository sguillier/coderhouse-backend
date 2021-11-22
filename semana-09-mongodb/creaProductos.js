
db.productos.drop()

db.productos.insertMany([
    {
        nombre: 'Mochila',
        precio: 2400,
        url: 'https://cdn3.iconfinder.com/data/icons/education-209/64/bag-pack-container-school-256.png',
        codigo: 'bag-pack-01',
    },
    {
        nombre: 'Calculadora',
        precio: 840,
        url: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
        codigo: 'calculator-01',
    },
    {
        nombre: 'Cuaderno',
        precio: 290,
        url: 'https://cdn3.iconfinder.com/data/icons/education-209/64/book-note-paper-school-256.png',
        codigo: 'book-note-01',
    },
    {
        nombre: 'Reloj',
        precio: 1100,
        url: 'https://cdn3.iconfinder.com/data/icons/education-209/64/clock-stopwatch-timer-time-256.png',
        codigo: 'clock-stopwatch-01',
    },
    {
        nombre: 'Globo Terraquio',
        precio: 3800,
        url: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
        codigo: 'globe-earth-01',
    },
    {
        nombre: 'Regla',
        precio: 380,
        url: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
        codigo: 'ruler-triangle-01',
    },
    {
        nombre: 'Lapiz',
        precio: 110,
        url: 'https://cdn3.iconfinder.com/data/icons/education-209/64/pencil-pen-stationery-school-256.png',
        codigo: 'pencil-pen-01',
    },
    {
        nombre: 'Paleta de Colores',
        precio: 1100,
        url: 'https://cdn3.iconfinder.com/data/icons/education-209/64/paint-color-pallete-brush-academy-256.png',
        codigo: 'paint-color-01',
    },
    {
        nombre: 'Microscopio',
        precio: 4900,
        url: 'https://cdn3.iconfinder.com/data/icons/education-209/64/microscope-lab-science-school-256.png',
        codigo: 'microscope-01',
    },
    {
        nombre: 'Tubo Ensayo',
        precio: 800,
        url: 'https://cdn3.iconfinder.com/data/icons/education-209/64/tube-lab-science-school-256.png',
        codigo: 'tube-lab-01',
    },
])

// El siguiente código imprime el resultado en pantalla
cursor = db.productos.find();
while ( cursor.hasNext() ) {
   printjson(cursor.next());
}