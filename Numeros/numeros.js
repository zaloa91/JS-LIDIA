// Pedir al usuario que ingrese los números N y M
let N = parseInt(prompt("Ingrese el primer número (N):"));
let M = parseInt(prompt("Ingrese el segundo número (M):"));

// Validar y ordenar N y M sin usar una variable temporal
if (N > M) {
    let temp = N;
    N = M;
    M = temp;
}

// Inicializar la suma de números pares
let sumaPares = 0;

// Iterar desde N hasta M
for (let i = N; i <= M; i++) {
    // Si el número es par, añadirlo a la suma
    if (i % 2 === 0) {
        sumaPares += i;
        console.log(i); // Mostrar el número en la consola
    }
}

// Mostrar la suma de todos los números pares entre N y M
console.log(sumaPares);

