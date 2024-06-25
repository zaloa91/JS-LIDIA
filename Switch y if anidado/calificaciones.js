//parseInt necesitamos que la palabra calificacion sea un numero para ser comparable?
//convierte un argumento numérico de tipo string a un entero.
//‘4’ = string
//4 = entero
//Es decir si pasas el string por parseInt te quedara un entero
// let calificacion = prompt("Ingrese una calificación del 1 al 5:");
// calificacion = parseInt(calificacion);
// if (calificacion >= 1 && calificacion <= 5) {

//     let nota;

//     switch (calificacion) {
//         case 1:
//             nota = "Deficiente";
//             break;
//         case 2:
//             nota = "Regular";
//             break;
//         case 3:
//             nota = "Aceptable";
//             break;
//         case 4:
//             nota = "Bueno";
//             break;
//         case 5:
//             nota = "Excelente";
//             break;
//         default:
//             nota = "Calificación no válida";
//     }

// } else {
//     console.log("Calificación no válida. Por favor ingrese un número del 1 al 5.");
// }
// //- variable con prompt tambien parseint if (si el numero es tata 1 y ademas 5)


// let numero = prompt("Ingrese una calificación del 1 al 5:");
// numero = parseInt(numero);


// if (numero >= 1 && numero <= 5) {

//     switch (numero) {
//         case 1:
//             console.log("Guau guau")
//             break;
//         case 2:
//             console.log("Miau")
//             break;
//         case 3:
//             console.log("Muuu")
//             break;
//         case 4:
//             console.log("cuac cuac")
//             break;
//         case 5:
//             console.log("Rugido")
//             break;

//     }



// } else {


//     console.log("Numero no válido")



// }



let edad = parseInt(prompt("Ingrese tu edad"));

if (edad >= 0) {

    if (edad >= 0 && edad <= 12) {
        console.log("Eres un niño.");
    }

    else if (edad >= 13 && edad <= 17) {
        console.log("Eres un adolescente.");
    }

    else if (edad >= 18 && edad <= 64) {
        console.log("Eres un adulto.");
    }

    else if (edad >= 65) {
        console.log("Eres un adolescente.");
    }

} else {
    console.log("Edad no valida")
}
