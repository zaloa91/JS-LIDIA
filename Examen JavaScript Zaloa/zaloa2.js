//2.

let contarPares = 0;
let continuar = true;

for (let i = 0; continuar == true; i++) { 
    let numero = prompt("Ingresa un número o escribe 'parar' para terminar:");

    if (numero.toLowerCase == 'parar') {
        continuar = false;
    } else {

        if (numero % 2 === 0) {
            contarPares++;
            console.log('El numero es par')

        } else {
            console.log('El numero no es par')
        }
    }
}