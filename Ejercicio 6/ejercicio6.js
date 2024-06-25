let años = prompt("Por favor, ingresa tu edad:");

let cuentaactiva = true;

let tieneacceso = (años >= 18) && (cuentaactiva);

console.log("La verificación es: " + tieneacceso);
//

let numerosecreto = prompt("Ingresa un numero");

if (numerosecreto >= 0) {
    console.log("Es positivo")
} else {
    console.log("Es negativo")
}

//

let numero = prompt("Ingresa un numero");

if (numero %2 == 0) {
    console.log("Es par")
} else {
    console.log("Es impar")
}

// 

let contra = prompt("Ingresa tu contraseña");
let verifica = prompt("Ingresa tu contraseña");
if (contra = verifica) {
    console.log("Contraseña correcta")
} else {
    console.log("Contraseña incorrecta")
}

