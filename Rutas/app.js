const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const QRCode = require('qrcode');
const app = express();
const port = 3010;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname))); // Permite servir archivos estáticos

// Rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, 'calculadora.html'));
});

app.get('/generarQR', (req, res) => {
    res.sendFile(path.join(__dirname, 'generadorQR.html'));
});

// Endpoint para generar el QR
app.post('/generate-qr', (req, res) => {
    const { name, email, institution, department } = req.body;
    const data = `Nombre: ${name}\nCorreo: ${email}\nInstitución: ${institution}\nDependencia: ${department}`;
    
    QRCode.toDataURL(data, (err, url) => {
        if (err) {
            res.send('Error al generar el QR');
        } else {
            res.send({ qrCodeUrl: url });  // Aquí se envía el QR como un objeto JSON
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
