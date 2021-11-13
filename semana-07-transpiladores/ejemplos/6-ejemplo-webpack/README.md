

* Creamos un proyecto de Node.js con npm init -y
* Instalamos Webpack y Webpack CLI
* npm install webpack webpack-cli



* Teniendo presente que en el archivo package.json debemos tener
"scripts": {
   "build": "webpack ./a1.js ./a2.js ./a3.js"
 },
* luego ejecutar npm run build



para ejecutar con node v17+ exportar la siguiente variable de entorno:

NODE_OPTIONS=--openssl-legacy-provider

sino, no funciona pq deprecaron una librería de encriptación y webpack aun no se
adaptó.
