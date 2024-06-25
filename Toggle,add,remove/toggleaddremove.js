// Obtener referencia al elemento a modificar
const elemento = document.getElementById('cambiar');

// Función para añadir una clase al elemento
function agregarClase() {
    elemento.classList.add('mi-clase');
}

// Función para eliminar una clase del elemento
function eliminarClase() {
    elemento.classList.remove('mi-clase');
}

// Función para alternar una clase en el elemento
function alternarClase() {
    elemento.classList.toggle('mi-clase');
}

// Asignar eventos a los botones
document.getElementById('btn-add-class').addEventListener('click', agregarClase);
document.getElementById('btn-remove-class').addEventListener('click', eliminarClase);
document.getElementById('btn-toggle-class').addEventListener('click', alternarClase);
