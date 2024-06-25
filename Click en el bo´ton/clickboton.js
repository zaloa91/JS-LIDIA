let boton = document.getElementById('boton');
let div = document.getElementById('div');


function mensaje() {
    div.innerHTML = '<p>¡Has hecho click en el <a href=#>botón!</a></p>';
}

//al pulsar el boton el evento que pasa es que cuando hace click sale el mensaje
boton.addEventListener('click', mensaje);
