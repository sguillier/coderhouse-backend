# Incorporamos un Input

## Consigna

Basado en el ejercicio que venimos realizando, ahora los mensajes enviados por los clientes deberán ser almacenados en el servidor y reflejados por debajo del elemento de entrada de texto cada vez que el usuario haga un envío. La estructura de almacenamiento será un array de objetos, donde cada objeto tendrá la siguiente estructura:
{ socketid: (el socket.id del que envió el mensaje), mensaje: (texto enviado)}

1. Cada cliente que se conecte recibirá la lista de mensajes completa.
2. Modificar el elemento de entrada en el cliente para que disponga de un botón de envío de mensaje.
3. Cada mensaje de cliente se representará en un renglón aparte, anteponiendo el socket id.

