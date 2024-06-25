let mensaje = "Hola Mundo";
let mensajeMayusculas = mensaje.toUpperCase();
console.log(mensajeMayusculas); // Resultado: "HOLA MUNDO"

//
let fraseMetida = prompt("Ingresa una frase:");
const almacenada = 'Gato';

if (fraseMetida.indexOf(almacenada) == -1) {
    console.log('La palabra ' + almacenada + ' no está en la frase.');
  

} else {
    console.log('La palabra ' + almacenada + ' está en la frase.');
    
}

//

let frase = prompt("Ingresa una frase:");
frase = frase.toLowerCase();
let letra = prompt("Ingresa una letra:");
letra = letra.toLowerCase();
let contador = 0;


for (let i = 0; i < frase.length; i++) {

//frase[i] la i es lo que mete el de letra. Entonces la letra que haya metido la busca en la "frase" que el usuario ha metido.
    if (frase[i] === letra) {
        contador++; 
    }
}


console.log("La letra '" + letra + "' aparece " + contador + " veces en la frase.");
