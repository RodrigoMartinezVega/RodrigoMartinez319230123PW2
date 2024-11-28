const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const app = express();
const port = 3007;

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'crud_project'
});

db.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
    } else {
        console.log("Conectado a la base de datos.");
    }
});

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());
app.use(express.static(__dirname));

// Ruta para agregar un usuario
app.post('/agregarUsuario', (req, res) => {
    const { nombre, correo, institucion, dependencia } = req.body;
    const query = "INSERT INTO usuarios (nombre, correo, institucion, dependencia) VALUES (?, ?, ?, ?)";
    db.query(query, [nombre, correo, institucion, dependencia], (err, result) => {
        if (err) {
            console.error("Error al agregar usuario:", err);
            return res.json({ success: false });
        }
        res.json({ success: true });
    });
});

// Ruta para obtener los usuarios
app.get('/obtenerUsuarios', (req, res) => {
    const query = "SELECT * FROM usuarios";
    db.query(query, (err, result) => {
        if (err) {
            console.error("Error al obtener usuarios:", err);
            return res.json({ usuarios: [] });
        }
        res.json({ usuarios: result });
    });
});

// Ruta para eliminar un usuario
app.delete('/eliminarUsuario/:id', (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM usuarios WHERE id = ?";
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error("Error al eliminar usuario:", err);
            return res.json({ success: false });
        }
        res.json({ success: true });
    });
});

// Ruta para actualizar un usuario
app.post('/actualizarUsuario', (req, res) => {
    const { id, nombre, correo, institucion, dependencia } = req.body;
    const query = "UPDATE usuarios SET nombre = ?, correo = ?, institucion = ?, dependencia = ? WHERE id = ?";
    db.query(query, [nombre, correo, institucion, dependencia, id], (err, result) => {
        if (err) {
            console.error("Error al actualizar usuario:", err);
            return res.json({ success: false });
        }
        res.json({ success: true });
    });
});

// Servir la página HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
