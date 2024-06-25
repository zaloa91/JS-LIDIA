// let lista = "manzana,naranja,uva,pera";
// let array = lista.split(',');
// console.log(array);


// let parrafo = document.querySelector('div');
// parrafo.style.backgroundColor = "lightblue";


// let parrafo2 = document.getElementsById('color');
// parrafo.style.backgroundColor = "lightblue";

// let parrafo = document.querySelector('p');
// parrafo.style.fontSize = "40px";



let miElemento = document.getElementById("miElemento");

// Función que se ejecuta cuando ocurre el evento de clic
function handleClick() {
    console.log("¡Hiciste clic en el elemento!");
}

function handleMouseOver() {
    console.log("El ratón está sobre el elemento.");
}
function handleMouseOut() {
    console.log("El ratón salió del elemento.");
}
miElemento.addEventListener("click", handleClick);
miElemento.addEventListener("mouseover", handleMouseOver);
miElemento.addEventListener("mouseout", handleMouseOut);
