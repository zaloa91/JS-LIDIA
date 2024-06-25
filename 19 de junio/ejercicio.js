// Obtener la referencia a la imagen y su origen
let imagen = document.getElementById('miImagen');
let imagenOriginalSrc = imagen.src;
let imagenNuevaSrc = "../19 de junio/5.jpg";
const fechaHora = document.getElementById('fecha-hora');

// Función para cambiar la imagen
function cambiarImagen() {
    imagen.src = imagenNuevaSrc;
}

// Función para restaurar la imagen original
function restaurarImagen() {
    imagen.src = imagenOriginalSrc;
}

// Función para actualizar la fecha y hora
function actualizarFechaHora() {
    const ahora = new Date();
    const opciones = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    fechaHora.textContent = ahora.toLocaleDateString('es-ES', opciones);
}

imagen.addEventListener('mouseover', cambiarImagen);
imagen.addEventListener('mouseout', restaurarImagen);

// Actualizar la fecha y hora cada segundo
setInterval(actualizarFechaHora, 1000);

actualizarFechaHora();
