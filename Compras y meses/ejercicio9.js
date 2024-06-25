let totalcompra = prompt("Ingrese el total de la compra:");
let descuento = 0;


if (totalcompra > 1000) {

    descuento = totalcompra * 0.10;

} else if (totalcompra > 500) {

    descuento = totalcompra * 0.05;

} else {

    descuento = 0;
}


if (descuento > 0) {
    console.log("El descuento es: " + descuento + "€");

} else {

    console.log("No hay descuento");
}

// SEGUNDO

let días;
let nombreMes = prompt("Ingrese el nombre de un mes en minúsculas:");

if (nombreMes == "enero" || nombreMes == "marzo" || nombreMes == "mayo" ||
    nombreMes == "julio" || nombreMes == "agosto" || nombreMes == "octubre" ||
    nombreMes == "diciembre") {
    dias = 31;
} else if (nombreMes == "febrero") {
    dias = 28;
} else if (nombreMes == "abril" || nombreMes == "junio" || nombreMes == "septiembre" ||
    nombreMes == "noviembre") {
    dias = 30;
} else {
    dias = null;
}


if (dias !== null) {
    console.log("El mes de " + nombreMes + " tiene " + dias + " días.");
} else {
    console.log("El nombre del mes ingresado es inválido.");
}
