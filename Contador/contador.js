// Inicializar el contador
let counter = 0;

// Obtener referencias a los elementos del DOM
const incrementButton = document.getElementById('incrementButton');
const counterDisplay = document.getElementById('counter');

// Añadir un evento onclick al botón
incrementButton.onclick = function () {
    // Incrementar el contador
    counter++;

    // Actualizar el valor mostrado en la página
    counterDisplay.textContent = counter;
};
