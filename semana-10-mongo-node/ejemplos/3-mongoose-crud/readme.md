# Consigna

Realizar un proyecto en Node.js que sobre la base colegio realice las siguientes acciones:
1. Actualizar el dni del estudiante Lucas Blanco a 20355875
2. Agregar un campo 'ingreso' a todos los documentos con el valor false
3. Modificar el valor de 'ingreso' a true para todos los estudiantes que pertenezcan al curso 1A
4. Listar los estudiantes que aprobaron (hayan sacado de 4 en adelante) sin los campos de _id y __v
5. Listar los estudiantes que posean el campo 'ingreso' en true sin los campos de _id y __v
6. Borrar de la colección de estudiantes los documentos cuyo campo 'ingreso' esté en true
7. Listar el contenido de la colección estudiantes utilizando la consola, imprimiendo en cada caso los datos almacenados (sin el campo __v) junto a su fecha de creación obtenida del ObjectID en formato YYYY/MM/DD HH:mm:SS. 
    Por ejemplo: 
    {"_id":"604df61b5e39a84ba41313e4","nombre":"Fabio","apellido":"Pieres","edad":39,"dni":"4315388","curso":"1B","nota":9,"ingreso":false} -> Fecha creación:  14/3/2021 08:40:11
8. Implementar estas funciones utilizando Promises en Mongoose con sintaxis async/await, utilizando la importación en formato ES Modules (import)
9. Verificar la información de la base 'colegio' a través de Robo 3T

