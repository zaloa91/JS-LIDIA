//1 - Pide al usuario que ingrese números hasta que ponga parar. Cuando escriba parar dejaran de salir cuadros de diálogos y aparecerá en la consola cuántos números pares ha ingresado. Sin utilizar !isNaN
//Necesitamos un for con una condición == a true.
//Si el usuario mete parar esa condición pasará a false.
//Si mete nº comprobaremos si el nº es par, si es par ++.



// let contarPares = 0;
// let continuar = true;

// for (let i = 0; continuar == true; i++) { // bucle infinito hasta que escribamos parar. Cada bucle sumame 1.

//     let numero = prompt("Ingresa un número o escribe 'parar' para terminar:");

//     if (numero.toLowerCase == 'parar') {

//         continuar = false;

//     } else {

//         if (numero % 2 === 0) {
//             contarPares++;
//             console.log('El numero es par')

//         } else {

//             console.log('El numero no es par')


//         }


//     }


// }

/////////

//2 - Pide al usuario que ingrese números hasta que ponga parar. Cuando escriba parar dejaran de salir cuadros de diálogos y aparecerá en la consola cuántos números positivos y pares ha ingresado, y en otra line cuántos números impares y negativos ha ingresado.

let numerosPositivosPares = 0;
let numerosNegativosPares = 0;
let seguir = true;

for (let i = 0; seguir == true; i++) {

    let ingresar = prompt("Ingresa un número o escribe 'parar' para terminar:");

    if (ingresar.toLowerCase() === 'parar') {

        seguir = false;

    } else {

        if ((numero % 2 === 0) && (numero >= 0)){

            numerosPositivosPares++;

            console.log(numerosPositivosPares);

        }else if ((numero % 2 == 0) && (numero < 0)){

            numerosNegativosPares++;

            console.log(numerosNegativosPares);
        }


    }

    }




