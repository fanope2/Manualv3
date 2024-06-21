const express = require('express');
const app = express();
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser');
const PORT = 3000;
const ip = 'localhost'
const connection = require("./db/db")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(express.static('public/'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/atencion', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/atencion.html'))
})

app.get('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/consulta.html'))
})

app.get('/galeria', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/galeria.html'))
})

app.get('/historia', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/historia.html'))
})

app.get('/mision-vision', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/mision-vision.html'))
})

app.get('/nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/nosotros.html'))
})

// Ruta API para obtener fechas cívicas
app.get('/api/dates/:current', (req, res) => {
    // Obtener el parámetro de la solicitud
    var request = req.params.current;

    // Realizar consulta a la base de datos
    connection.query('SELECT ID, DATE_FORMAT(FECHA, "%d/%m/%Y") AS FECHA, NOMBRE, DESCRIPCION, TIPO_FECHA, ACTIVO FROM FECHAS_CIVICAS WHERE FECHA = ?', [request], (err, row, fields) => {
        if (row && row.length > 0) {
            // Si hay resultados, enviarlos como JSON
            console.log('Respuesta del Json: ', row[0]);
            res.json(row[0]);
        } else {
            // En caso de error o no encontrar datos, enviar null
            if (err) {
                console.log('Error al obtener los datos: ', err);
            } else {
                console.log('No se encontraron datos para la fecha:', request);
            }
            res.json(null);
        }
    });
});
app.post('/guardar', (req, res) => {
    const { nombres, apellidos, dni, celular, email, asunto, mensaje } = req.body;
    console.log('Datos recibidos: ', req.body);

    const query = 'INSERT INTO consultas (nombres, apellidos, dni, celular, email, asunto, mensaje) VALUES(?,?,?,?,?,?,?)';

    connection.query(query, [nombres, apellidos, dni, celular, email, asunto, mensaje], (err, result) => {
        if (err) {
            console.error('Error al guardar en la base de datos: ', err);
            res.status(500).send('Error al guardar en la base de datos');
        } else {
            console.log('Datos guardados correctamente');
            res.redirect('/formulario');
            // Redirige a la página del formulario
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server en http://${ip}:${PORT}`)
})