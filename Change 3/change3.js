
function cambiarColor() {


//para identificar quien va a hacer la funcion.
    let colorcaja = document.getElementById('caja')



//estamos igualando el texto del div con el texto que haya seleccionado el usuario. Cambia el color de fondo del <div> según el valor (value) de la opción seleccionada en el <select>. 
    colorcaja.style.backgroundColor = this.value;


//actualiza el texto dentro del <div> con el texto de la opción seleccionada en el <select>.
    colorcaja.textContent = this.options[this.selectedIndex].textContent;
}

let seleccion = document.getElementById('colorSelec');
seleccion.addEventListener('change', cambiarColor);

colorcaja.style.backgroundColor = this.value;

