const express = require('express');
const app = express();
const port = 9000;

// Este es el resultado a pedir la dirección /
app.get('/', (request, response) => {
    response.sendFile(__dirname + "/index.html");
});


// Iniciamos el servidor
console.log(`Servidor en http://localhost:${port}\n`);
app.listen(port);
