//Crear una web con una lista desplegable con cuatro opciones (blanco, rojo, verde y azul) y un cuadro de texto. Al elegir una de las tres opciones cambiará el color de fondo del cuadro de texto al color seleccionado y aparecerá escrito en él el nombre del color.



function cambiarColor() {
//para identificar quien va a hacer la funcion.
    let colorcaja = document.getElementById('caja')

    colorcaja.style.backgroundColor = this.value;
    colorcaja.textContent = this.value;

}

let seleccion = document.getElementById('colorSelec');
seleccion.addEventListener('change', cambiarColor);

//colorcaja.style.backgroundColor = this.value;: "Cambia el color de fondo de la caja al color que elegí en la lista".
//colorcaja.textContent = this.value;: "Escribe el nombre del color que elegí dentro de la caja".