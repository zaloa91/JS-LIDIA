let menu = document.getElementById('icono-menu');
let navegador = document.getElementById('navegador');

let menuAbierto = false; // Variable para llevar el seguimiento del estado del menú

function menuAccion() {
    if (!menuAbierto) {
        // Si el menú está cerrado, lo abrimos
        navegador.style.display = 'block'; 
    } else {
        // Si el menú está abierto, lo cerramos
        navegador.style.display = 'none'; 
    }
    menuAbierto = !menuAbierto; // Cambiamos el estado del menú
}

menu.addEventListener("click", menuAccion);





// let hamburguesa = document.getElementById('icono-menu');
// let menu = document.getElementById('menu');

// function verMenu(){
// menu.classList.toggle('active');
// }

// hamburguesa.addEventListener('click', verMenu);
