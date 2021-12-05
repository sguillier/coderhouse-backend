# Consigna

1. Conectarse a la base MongoDB Atlas con los clientes CLI, Robo 3T y Node.js
2. Mediante la consola CLI insertar estos documentos en una base llamada ‘ecommerce’, colección ‘usuarios’:
'[
    { nombre: 'Lucas', apellido: 'Blanco', dni: '30355874' },
    { nombre: 'María', apellido: 'García', dni: '29575148' },
    { nombre: 'Tomas', apellido: 'Sierra', dni: '38654790' },
    { nombre: 'Carlos', apellido: 'Fernández', dni: '26935670' }
]'
3. A través de un proyecto Node.js, listar estos datos representándolos en la consola.
4. Con el mismo proyecto, incorporar un usuario más: 
    nombre: 'Federico', apellido: 'Perez', dni: '320118321' }
    Utilizar sintaxis de Promesas con async await e import para la importación de módulos.
5. Con Robo 3T borrar al usuario llamado Tomas.
6. Con Mongo CLI actualizar el usuario llamado 'Carlos' al nombre 'Juan Carlos' y luego listar los documentos finales.


# Comentario

Este ejemplo utiliza base atlas de cuenta del profesor, se puede caer en cualquier momento

Se cae tambien porque pide "DNI unico", si lo cambiamos no da problemas.
