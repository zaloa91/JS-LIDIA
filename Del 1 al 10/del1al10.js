// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// //

// for (let i = 20; i >= 0; i -= 2) {
//     console.log(i);
// }

// //

// for (let i = 1; i < 1000; i *= 2) {
//     console.log(i);
// }

// let palabra = prompt('Por favor ingresa una palabra');
// console.log(palabra.length);


let palabra = prompt("Ingresa una palabra:");
let numeroDeVeces = parseInt(prompt("Ingresa el número de veces que quieres repetir la palabra:"));
let palabraRepetida = "";

for (let i = 0; i < numeroDeVeces; i++) {
    // += que añada a parte del espacio la palabra
palabraRepetida += (palabra + " ");

}

console.log(palabraRepetida);
