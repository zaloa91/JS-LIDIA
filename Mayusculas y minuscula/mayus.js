function determinarTipoCadena(cadena) {
    // Verificar si la cadena está completamente en mayúsculas
    if (cadena === cadena.toUpperCase()) {
        return 'mayúsculas';
    }
    // Verificar si la cadena está completamente en minúsculas
    else if (cadena === cadena.toLowerCase()) {
        return 'minúsculas';
    }
    // Si no es completamente en mayúsculas ni en minúsculas, entonces es una mezcla
    else {
        return 'mezcla';
    }
}

// Pedir al usuario que ingrese una cadena de texto
let texto = prompt("Ingrese una cadena de texto:");

// Determinar el tipo de la cadena ingresada
let tipo = determinarTipoCadena(texto);

// Mostrar el resultado
console.log(`La cadena ingresada está escrita en ${tipo}.`);
