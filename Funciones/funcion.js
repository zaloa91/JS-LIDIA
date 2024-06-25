// Función que toma nombre y apellido como parámetros y muestra un saludo en la consola
function saludar(nombre, apellido) {
    console.log('Hola, ' + nombre + apellido);
}

// Pide al usuario que ingrese su nombre y apellido
const nombreUsuario = prompt("Por favor, ingresa tu nombre:");
const apellidoUsuario = prompt("Por favor, ingresa tu apellido:");

// Llama a la función saludar con los datos ingresados por el usuario
saludar(nombreUsuario, apellidoUsuario);


//Otro ejercicio

// Función que calcula el cuadrado de un número
function calcularCuadrado(numero) {
    return numero * numero;
}

// Función que solicita al usuario ingresar un número y se asegura de que sea un tipo number
function pedirNumero() {
    let numero = prompt("Por favor, ingresa un número:");
    return Number(numero) || 0;
}

// Solicita al usuario que ingrese un número
const numeroIngresado = pedirNumero();

// Calcula el cuadrado del número ingresado
const cuadrado = calcularCuadrado(numeroIngresado);

// Muestra el resultado en la consola
console.log('El cuadrado de ' + numeroIngresado + 'es ' + cuadrado);

//////////////////////////////////////////////////////////////////////////////////////////////

// Función que determina si un número es positivo, negativo o cero
function determinarPositivoNegativo(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}

// Solicita al usuario que ingrese un número
let numero = parseInt(prompt("Por favor, ingresa un número:"));

// Determina si el número es positivo o negativo
let resultado = determinarPositivoNegativo(numero);

// Muestra el resultado en la consola
console.log('El número es ' + resultado);

//////////////////////////////////////////////////////////////////////////////////////////////


let num = parseInt(prompt("Por favor, ingresa un número:"));

function ParOImpar(numero2) {
    if (numero2 % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}



console.log('el numero es' + ParOImpar(num));
//////////////////////////////////////////////////////////////////////////////////////////////

function numerosPares() {
    for (let i = 2; i <= 10; i += 2) {

        console.log(i);
    }

}

// Llamamos a la función para imprimir los números pares del 1 al 10
numerosPares();


//////////////////////////////////////////////////////////////////////////////////////////////


// Solicitar al usuario los números de inicio y fin
let x = parseInt (prompt("Introduce el número de inicio (x):"));
let y = parseInt (prompt("Introduce el número de fin (y):"));


// Función para imprimir números pares de x a y
function NumerosPares(inicio, fin) {
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }

    }
}

NumerosPares(x,y);


//////////////////////////////////////////////////////////////////////////////////////////////
// VERIFRICAR CONTRASEÑA CON FUNCIONES
//////////////////////////////////////////////////////////////////////////////////////////////

// Contraseña almacenada
let contrasenaAlmacenada = "contraseña123";

// Función para pedir la contraseña al usuario

let pass = prompt("Por favor, ingresa tu contraseña:");


// Función para verificar la contraseña ingresada
function verificarContrasena(contrasena) {
    if (contrasena === contrasenaAlmacenada) {
        console.log("¡Contraseña correcta! Acceso permitido.");
    } else {
        console.log("Contraseña incorrecta. Acceso denegado.");
    }
}

// Solicitar al usuario ingresar la contraseña
let contrasenaIngresada = pedirContrasena();

// Verificar la contraseña ingresada
console.log(verificarContrasena + pass);


//////////////////////////////////////////////////////////////////////////////////////////////
// DETERMINA EL GRUPO DE EDAD
//////////////////////////////////////////////////////////////////////////////////////////////

// Solicitar al usuario ingresar la edad
let edad = parseInt(prompt("Por favor, ingresa tu edad:"), 10);

// Función para determinar el grupo de edad
function determinarGrupoEdad(edad) {
    if (edad >= 0) {
        if (edad <= 12) {
            console.log("Es un niño");
        } else if (edad <= 17) {
            console.log("Es adolescente");
        } else if (edad <= 64) {
            console.log("Es adulto");
        } else {
            console.log("Es anciano");
        }
    } else {
        console.log("Edad no válida");
    }
}
// Determinar el grupo de edad
determinarGrupoEdad(edad);
