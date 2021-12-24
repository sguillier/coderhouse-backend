

db.mensajes.drop()

db.mensajes.insertMany([
    {
        nombre: 'Sebastian',
        correo: 'sebastian@correo.com',
        timestamp: '31-10-2021 23:00:45',
        mensaje: 'Hola Mundo',
    },
    {
        nombre: 'Mundo',
        correo: 'mundo@correo.com',
        timestamp: '31-10-2021 23:01:44',
        mensaje: 'Hola',
    },
    {
        nombre: 'Mundo',
        correo: 'mundo@correo.com',
        timestamp: '31-10-2021 23:01:52',
        mensaje: 'Como estas Sebastian',
    },
    {
        nombre: 'Sebastian',
        correo: 'sebastian@correo.com',
        timestamp: '31-10-2021 23:02:11',
        mensaje: 'Muy bien gracias',
    },
    {
        nombre: 'Violeta',
        correo: 'violeta@correo.com',
        timestamp: '31-10-2021 23:03:15',
        mensaje: 'Hola Todos',
    },
    {
        nombre: 'Violeta',
        correo: 'violeta@correo.com',
        timestamp: '31-10-2021 23:03:28',
        mensaje: 'Les queria hacer una consulta',
    },
    {
        nombre: 'Sebastian',
        correo: 'sebastian@correo.com',
        timestamp: '31-10-2021 23:02:34',
        mensaje: 'Cuentanos Violeta, en que te podemos ayudar',
    },
    {
        nombre: 'Violeta',
        correo: 'violeta@correo.com',
        timestamp: '31-10-2021 23:03:52',
        mensaje: 'Queria Saber el precio de la mochila',
    },
    {
        nombre: 'Sebastian',
        correo: 'sebastian@correo.com',
        timestamp: '31-10-2021 23:04:11',
        mensaje: 'Lastima, pero está agotada',
    },
    {
        nombre: 'Violeta',
        correo: 'violeta@correo.com',
        timestamp: '31-10-2021 23:04:24',
        mensaje: 'Ok, entiendo gracias. Slds.',
    },
    {
        nombre: 'Sebastian',
        correo: 'sebastian@correo.com',
        timestamp: '31-10-2021 23:04:33',
        mensaje: 'Slds!.',
    }
])

// El siguiente código imprime el resultado en pantalla
cursor = db.mensajes.find();
while ( cursor.hasNext() ) {
   printjson(cursor.next());
}