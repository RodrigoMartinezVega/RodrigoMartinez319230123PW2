const express = require('express');
const app = express();
const port = 3010;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/bienvenida.html');
});

app.get('/misdatos', (req, res) => {
    res.sendFile(__dirname + '/public/misdatos.html');
});

app.get('/contacto', (req, res) => {
    res.sendFile(__dirname + '/public/contacto.html');
});

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});