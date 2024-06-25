const parrafo = document.getElementById('parrafo');
const nombre = document.getElementById('nombre');

function actualizarNombre() {
    parrafo.innerHTML = this.value;
    //tambien puede ser parrafo.textContent 
}

nombre.addEventListener('change', actualizarNombre);


 