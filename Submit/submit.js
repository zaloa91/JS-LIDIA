let formulario = document.getElementById('formulario');

function validarEnvio(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    let nombre = document.getElementById('nombre').value;//value es el dato que sea que haya metido el usuario.
    let edad = document.getElementById('edad').value;
    let interes = document.getElementById('interes').value;


    //"" que no lo deje vacio
    let nombreValido = (nombre !== "");
    let interesValido = (interes !== "");
    let edadValida = Number.isInteger(parseInt(edad)) && (parseInt(edad)) > 18;

    if (nombreValido && interesValido && edadValida) {

        formulario.submit();

    }

    mostrarError('error-nombre', nombreValido)
    mostrarError('error-edad', edadValida)
    mostrarError('error-interes', interesValido)
}

function mostrarError(id, mostrar) {

    let parrafo = document.getElementById(id);

    if (mostrar) {

        parrafo.style.display = 'none';

    } else {
        parrafo.style.display = 'block';
    }
}




formulario.addEventListener('submit', validarEnvio);