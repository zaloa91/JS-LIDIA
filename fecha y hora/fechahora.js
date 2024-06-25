// Obtener referencias a los elementos del DOM
const fechaSalir = document.getElementById('fechaSalir');
const tiempoSalir = document.getElementById('tiempoSalir');

// Función para obtener el nombre del día de la semana
function getDayName(indexDia) {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return dias[indexDia];
}

// Función para obtener el nombre del mes
function getMonthName(mesIndex) {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return meses[mesIndex];
}

// Añadir un evento onclick al botón
fechaSalir.onclick = function () {
    // Obtener la fecha y hora actual
    const now = new Date();

    // Obtener el nombre del día de la semana y del mes
    const nombreDia = getDayName(now.getDay());
    const monthName = getMonthName(now.getMonth());

    // Formatear la fecha y hora como una cadena
    const fechaCompleta = nombreDia + ', ' + now.getDate() + ' de ' + monthName + ' de ' + now.getFullYear() + ', ' + now.toLocaleTimeString();

    // Mostrar la fecha y hora en el párrafo
    tiempoSalir.textContent = fechaCompleta;
};
