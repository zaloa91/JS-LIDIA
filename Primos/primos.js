// Solicitar al usuario que ingrese un número
let numero = parseInt(prompt("Introduce un número:"));
// Declarar una variable asumiendo inicialmente que el número es primo
let esPrimo = true;

// Utilizar un bucle for para repetir desde 2 hasta la mitad del número
for (let i = 2; i <= (numero / 2); i++) {
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


//

function calcularRectangulo(base, altura) {
    return base * altura;
}

let base = prompt("Ingrese la base del rectángulo:");
let altura = prompt("Ingrese la altura del rectángulo:");
let area = calcularRectangulo(base, altura);
console.log("El área del rectángulo es: " + area);

//

function saludar(nombre) {
    console.log('Hola, !'+ nombre + '¿Cómo estás?');
}

let nombreUsuario = prompt("Por favor, ingresa tu nombre:");

saludar(nombreUsuario);
