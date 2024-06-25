//////////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO1: Mostrar en la consola los números de X a 1 disminuyendo de 1 en 1. X lo ingresa el usuario en un prompt:
//////////////////////////////////////////////////////////////////////////////////////////////

// Solicita al usuario que ingrese un número y convertir el valor ingresado a un número entero
let x = parseInt(prompt("Ingresa un número:"));

// Verifica si el valor ingresado es un número válido mayor que 0
if (x > 0) {
// Muestra los números de x a 1 disminuyendo de 1 en 1
    for (let i = x; i >= 1; i--) {
        console.log(i);
    }
} else {
    console.log("Por favor ingresa un número válido mayor que 0.");
}

//////////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO2: Ejercicio que me pida números mientras no le diga que pare y me muestre solo los pares. 
//////////////////////////////////////////////////////////////////////////////////////////////

let numerosPares = 0;
let seguir = true;

for (let i = 0; seguir == true; i++) {

    let ingresar = prompt("Ingresa un número o escribe 'parar' para terminar:");

    if (ingresar.toLowerCase() === 'parar') {

        seguir = false;

    } else {

        if ((numero % 2 === 0) && (numero >= 0)){

            numerosPares++;

            console.log(numerosPares);

    }

    }
}

//////////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO3: Programa que nos diga si un número es primo (no es divisible por ninguno otro número que no sea él mismo o 1)
//////////////////////////////////////////////////////////////////////////////////////////////

// Solicitar al usuario que ingrese un número
let numero = parseInt(prompt("Introduce un número:"));
// Declarar una variable asumiendo inicialmente que el número es primo
let esPrimo = true;

// Utilizar un bucle for para repetir desde 2 hasta la mitad del número
for (let i = 2; i <= numero / 2; i++) {
    // Verificar si el número es divisible por i que en este caso es 2
    if (numero % i === 0) {
        esPrimo = false;

    }
}

// Imprimir en la consola si el número es primo o no
if (esPrimo) {
    console.log(numero + " es un número primo.");
} else {
    console.log(numero + " no es un número primo.");
}

//////////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO4: Programa que pida una frase y muestre en la consola cuantas veces aparece la letra o.
//////////////////////////////////////////////////////////////////////////////////////////////


// Solicitar al usuario que ingrese una frase
let frase = prompt("Ingresa una frase:");

// Contador para almacenar el número de veces que aparece la letra 'o'
let contador = 0;

// Recorrer cada caracter de la frase y contar cuántas veces aparece la letra 'o'
for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === 'o') {
        contador++;
    }
}

// Mostrar el resultado en la consola
console.log("La letra 'o' aparece " + contador + " veces en la frase.");

//////////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO5: Función → El usuario ingresa un nº y nos tiene que aparecer en la consola si es par o impar.
//////////////////////////////////////////////////////////////////////////////////////////////

// Solicitar al usuario que ingrese un número
let numeroUsuario = parseInt(prompt("Ingresa un número:"));

function verificarParImpar(numero) {
    if (Number(numero) == numero && numero % 1 === 0) {
        if (numero % 2 === 0) {
            return "par";
        } else {
            return "impar";
        }

    }
}

verificarParImpar(numeroUsuario);
console.log("El numero es " + verificarParImpar + numeroUsuario)
