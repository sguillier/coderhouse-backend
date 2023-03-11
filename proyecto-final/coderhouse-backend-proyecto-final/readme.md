# Sobre El Proyecto

Proyecto Final del curso de BackEnd en CoderHouse. Trata sobre un e-comerce con algunas funcionalidades propias de una pagina de compra. Incluye un chat.

## Sobre el Despliegue

Ver en el siguiente link el despliegue del proyecto

`https://back-end-proyecto-final.herokuapp.com/`

## Sobre la Persistencia

Puede ser seteada en el archivo de configuracion `/src/persistencia/daos/configDaos.js`. Por defecto se encuentra vinculada a firebase pero puede ser cambiado tambien a memoria, mongodb o archivo local txt. Las colecciones utilizadas son:
* productos
* ordenes
* usuarios
* mensajes

Para el `carrito` no hay persistencia en el BackEnd.


## Sobre la Autentificación y Sessiones

Se utiliza passport local

## Sobre los EndPoints

Estan agrupados en las siguientes rutas:
* /api/productos
* /api/ordenes
* /api/auth

## Sobre Socket

Maneja el chat y entre sus principales caracteristicas está que no se puede enviar ni recibir mensajes si no se esta autenticado.

## Sobre el Diseño

El proyecto es del tipo data on wire, a pesar de que back y fron estan en el mismo proyecto son completamente independientes.
