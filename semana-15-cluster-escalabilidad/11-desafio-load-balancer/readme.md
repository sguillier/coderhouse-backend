﻿# Consigna

Realizar los siguentes cambios en el servidor Nginx que venimos utilizando:

Volver a configurar el servidor Nginx con el puerto 80 como puerto de escucha.

Derivar la información entrante en su ruta '/datos' a tres instancias Node.js escuchando en distintos puertos: ej: 8081 y 8082

Las instancias de node responderán en esa ruta: el número de puerto de escucha, su pid y la fecha y hora actual, ej: 'Server en PORT(puerto) - PID(pid) - FYH(fyh)' 
En principio el balanceo de carga será equitativo para las tres instancias.

La primera instancias (8081) correrá en modo fork (por código), la otra (8082) en modo cluster (por código) utilizando PM2 modo fork (sin -i max).

Probar que con cada request cambie el servidor que responde en forma equitativa.

Luego cambiar la configuración del servidor para que la carga se distribuya 1-3 entre las dos instancias de Node, es decir, la instancia 8082 atenderá el triple de paquetes que la instancias 8081. Verificar esta operación.

Nota: la instancia de servidor node deberá recibir como primer parámetro el puerto de escucha y como segundo el modo de trabajo: FORK ó CLUSTER
