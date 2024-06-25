// let boton = document.getElementById('boton')
// function darclick() {
//     alert('Hiciste click en el boton')
// }

// boton.addEventListener('click', darclick);

// ////////////////////////////////////////////////////

// let enlace = document.getElementById('enlace');

// function cambiarColor() {
//     enlace.style.backgroundColor = "yellow";
// }

// function restaurarColor() {
//     enlace.style.backgroundColor = "";
// }

// function mostrarAlerta() {
//     alert('¡Hiciste click en el enlace!');
// }

// enlace.addEventListener('mouseover', cambiarColor);
// enlace.addEventListener('mouseout', restaurarColor);
// enlace.addEventListener('click', mostrarAlerta);

/////////////////////
//2 Cuando pase el ratón por encima del div, cambiará el color de fondo de ese div.
let miDiv = document.getElementById("miDiv");

function pasar() {
    miDiv.style.backgroundColor = "deeppink";
}

function salir() {
    miDiv.style.backgroundColor = "violet";
}

miDiv.addEventListener("mouseover", pasar);
miDiv.addEventListener("mouseout", salir);




