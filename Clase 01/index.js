
class Persona{
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return this.nombre + ' ' + this.apellido
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombre, autor){
        this.libros.push({nombre:nombre, autor:autor})
    }

    getBooksNames(){
        return this.libros.map(e => e.nombre)
    }

}


// Usuario Ejemplo
const personaEjemplo = new Persona('Sebastian', 'Guillier')

// Agregamos Mascotas
personaEjemplo.addMascota('Perro')
personaEjemplo.addMascota('Gato')
personaEjemplo.addMascota('Leon')

// Agregamos Libros
personaEjemplo.addBook('El Seños de Los Anillo', 'J.J.Tolkin')
personaEjemplo.addBook('Harry Potter', 'J.K. Rowling')

// Sacamos a console.log
console.log('Objeto personaEjemplo: ',personaEjemplo)
console.log('personaEjemplo.getFullName(): ', personaEjemplo.getFullName())
console.log('personaEjemplo.countMascotas(): ',personaEjemplo.countMascotas())
console.log('personaEjemplo.getBooksNames(): ',personaEjemplo.getBooksNames())
