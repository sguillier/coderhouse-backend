


//
//
// Para visualizar los resultados de este codigo se debe
// ejecutar 'mongo' en el terminal en la carpeta donde se encuentre script.js, creaMensajes.js y creaProductos.js.
// Una vez dentro de la terminal de mongo ejecutar 'load(script.js)'
// ...............................................................................................................




// Con el siguiente comando seleccionamos la base que vamos a manejar (si no existe la crea).
db = db.getSiblingDB('ecommerce')



// Puntos 1, 2 y 3.
print( 'Puntos 1, 2 y 3. Crea las 2 collecciones, inserta documentos y los lista en pantalla ....................................' )
load("creaProductos.js")
load("creaMensajes.js")



// 4. 
print('4. Se muestra la cantidad de documentos almacendos en cada colleccion  ....................................')
print( db.productos.count() )
print( db.mensajes.count() )



// 5.a 
print('5.a. Agregamos otro producto a productos  ....................................')
db.productos.insertOne({
    nombre: 'Pizzarra',
    precio: 4100,
    url: 'https://cdn3.iconfinder.com/data/icons/education-209/64/board-math-class-school-256.png',
    codigo: 'board-math-01',
})



// 5.b.i.
print( '5.b.i. Listamos los productos con precio menor a 1000 pesos.  ....................................' )
cursor = db.productos.find({precio:{$lte:1000}});
// El siguiente código imprime el resultado en pantalla
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}



// 5.b.ii. 
print( '5.b.i. Listamos los productos con precio entre los 1000 a 3000 pesos.  ....................................' )
cursor = db.productos.find({precio:{$gte:1000, $lte:3000}});
// El siguiente código imprime el resultado en pantalla
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}



// 5.b.iii. 
print( '5.b.i. Listamos los productos con precio mayor a 3000 pesos.  ....................................' )
cursor = db.productos.find({precio:{$gte:3000}});
// El siguiente código imprime el resultado en pantalla
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}



// 5.b.iv. 
print( '5.b.i. Nombre del tercer producto más barato..  ....................................' )
cursor = db.productos.find({},{ nombre: 1, }).sort({"precio":1}).skip(2).limit(1);
// El siguiente código imprime el resultado en pantalla
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}



// 5.c.
print('Actualizamos todos los productos, agregando el campo stock a todos ellos con un valor de 100.   ....................................')
db.productos.updateMany({},{ $set: {"stock": 100}})
// El siguiente código imprime el resultado en pantalla
cursor = db.productos.find()
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}



// 5.d.  
print('Cambiamos el stock a cero de los productos con precios mayores a 4000 pesos.   ....................................')
db.productos.updateMany({precio:{$gte:4000}},{ $set: {"stock": 0}})
// El siguiente código imprime el resultado en pantalla
cursor = db.productos.find()
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}



// 5.e.  
print('Borrarmos los productos con precio menor a 1000 pesos    ....................................')
db.productos.deleteMany({precio:{$lte:1000}})
// El siguiente código imprime el resultado en pantalla
cursor = db.productos.find()
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}




// 6. 
print("Creamos un usuario 'pepe' clave: 'asd456' que sólo pueda leer la base de datos ecommerce. Verificar que pepe no pueda cambiar la información.     ....................................")
db.createUser({
    user: "pepe",
    pwd: "asd456",
    roles: [
         { role: "read", db: "ecommerce"}
    ]
})

