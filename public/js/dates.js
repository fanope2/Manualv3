// Definir la dirección IP del servidor
const ip = 'localhost';

// Definir la ruta base de la API
const MAIN_PATH = `http://${ip}:3000/api/`;

// Crear un objeto de fecha para obtener la fecha actual
const date = new Date();

// Formatear la fecha actual en formato 'YYYY-MM-DD'
let currentDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

// Array con los nombres de los días de la semana
let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

// Obtener el nombre del día de la semana actual
let diasSemana = dias[date.getDay()];

// Formatear la fecha actual en formato 'Día DD/MM/YYYY'
let currentDateFormated = diasSemana + '  ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

// Realizar una petición a la API para obtener datos de la fecha actual
let dates = fetch(MAIN_PATH + 'dates/' + currentDate)
    .then((res) => {
        // Verificar si la respuesta es correcta
        if (!res.ok) {
            throw new Error('Error en la petición');
        }
        // Convertir la respuesta a formato JSON
        return res.json();
    })
    .then((data) => {
        // Verificar si no se encontraron datos
        if (!data) {
            console.log('No hay datos');
            // Asignar datos por defecto si no hay datos
            data = { NOMBRE: "Hoy no se celebra nada", TIPO_FECHA: " - ", DESCRIPCION: "Sin descripción" };
        }
        console.log('Mostrando data: ', data);

        // Insertar los datos obtenidos en el elemento con id 'contentModal'
        document.getElementById('contentModal').innerHTML = `
        <h1>Hoy es ${currentDateFormated}</h1>
        <p>Nombre: ${data.NOMBRE}</p>
        <p>Descripcion:  ${data.DESCRIPCION}</p>
        <p>Tipo de Celebracion: ${data.TIPO_FECHA}</p>
        `;
    })
    .catch((err) => {
        // Manejo de errores en caso de que ocurra alguno durante la petición
        console.log('Error: ', err);
    });

// Mostrar la fecha actual en la consola
console.log('Fecha actual: ', currentDateFormated);
