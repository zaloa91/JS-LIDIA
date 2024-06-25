////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 1: Agregar elementos a un array vacío. Solo codigo javascript. Crea un array vacío. Agrega, Manzana, Banana y Naranja al array vacío. Ponerlo a la fuerza.
////////////////////////////////////////////////////////////////////////////////////


// Crear un array vacío
var miArray = [];

// Agregar elementos al array
miArray.push("Manzana");
miArray.push("Banana");
miArray.push("Naranja");

// Mostrar el array resultante
console.log(miArray);

////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 2: Agregar elementos a un array vacío. Solo codigo javascript. Crea un array vacío. Agrega, Manzana, Banana y Naranja al array vacío. PUSH
////////////////////////////////////////////////////////////////////////////////////

// Crear un array con los números 1, 2 y 3
var miArray = [1, 2, 3];

// Agregar números hasta el 6
numeros.push(4, 5, 6);


// Mostrar el array resultante
console.log(numeros);

////////////////////////////////////////////////////////////////////////////////////
//Suma de elementos en un array utilizando una función. Tienes un array de números y quieres calcular la suma de todos los valores del array. Crea una función que devuelva la suma de los números.Recorre el array y suma cada valor.
////////////////////////////////////////////////////////////////////////////////////
let numeros = [1, 2, 3, 4, 5];

let resultado = arrayNumeros(numeros);

function arrayNumeros(array) {
    
    let suma = 0;

    for (let i = 0; i < array.length; i++) {

        suma += array[i];
    }

    return suma;
}

console.log("La suma de los números en el array es:", resultado);
