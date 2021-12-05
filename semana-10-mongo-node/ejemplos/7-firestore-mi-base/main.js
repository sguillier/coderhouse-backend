import admin from "firebase-admin"
import fs from 'fs'

const serviceAccount = JSON.parse(fs.readFileSync("./db/coder-back-end-firebase-adminsdk-vo1fs-6e4a77bfab.json", 'utf8'))

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

console.log('Base Firebase conectada!')

const db = admin.firestore();
const colores = db.collection('colores')

// /* --------------------------------------- */
// 1) Agregar los colores red, green, blue dentro de una colección llamada colores con el formato: { nombre: color }
const red = await colores.add({ nombre: 'red' });
const green = await colores.add({ nombre: 'green' });
const blue = await colores.add({ nombre: 'blue' });
console.log('Colores insertados')

// /* --------------------------------------- */
// 2) Listar todos los colores disponibles.
const snapshot = await colores.get();
snapshot.forEach(doc => {
    console.log({ id: doc.id, ...doc.data() })
})


// /* --------------------------------------- */
// 3) Modificar el color blue por navy.
await colores.doc(blue.id).update({ nombre: 'navy' });
console.log("El color ha sido actualizado");


/* --------------------------------------- */
await colores.doc(red.id).delete();
console.log("El color ha sido borrado exitosamente");


