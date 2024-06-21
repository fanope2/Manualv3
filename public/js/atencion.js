function horarioAtencion() {
    const horaActual = new Date().getHours();
    const horaInicio = 20; // 7am
    const horaFin = 14; // 2pm
    const estadoTienda = document.getElementById("estadoTienda");

    if (horaActual >= horaInicio && horaActual < horaFin) {
        estadoTienda.textContent = "Abierto";
    } else {
        estadoTienda.textContent = "Cerrado";
    }
}

horarioAtencion();