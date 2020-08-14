const express = require('express');
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Establecer las rutas de mi restapi
app.use(require('./routes/index'));

//Configuro y levanto el servidor
app.listen(3000);

console.log("Server Ok en puerto 3000");