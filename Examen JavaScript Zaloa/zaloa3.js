//3.

let numero = parseInt(prompt("Introduce un número:"));

let esPrimo = true;


for (let i = 2; i <= (numero / 2); i++) {
    if (numero % i === 0) {
        esPrimo = false;

    }
}

if (esPrimo) {
    console.log(numero + " es un número primo.");
} else {
    console.log(numero + " no es un número primo.");
}