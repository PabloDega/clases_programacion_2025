let miVariable = 1234;

console.log(miVariable);

miVariable = 558;
console.log(miVariable);

const apellido = "Deganis";
console.log(apellido);
console.log("Deganis")

/* apellido = "Gomez";
console.log(apellido) */

const nombre = "Pablo";

console.log(nombre, apellido);

const nombreCompleto = nombre + apellido;
console.log(nombreCompleto);

/* let dni = window.prompt("Ingrese su DNI");
console.log(dni); */

let numeroA = 6;
let numeroB = 4;
let suma = numeroA + numeroB;
console.log(suma);

/* let numeroC = window.prompt("Primer numero");
numeroC = Number(numeroC); // Parsear
let numeroD = window.prompt("Segundo numero");
numeroD = Number(numeroD);
let sumaCD = numeroC + numeroD;
console.log(sumaCD);
 */

// Scoope

let numeroX = 17;
console.log(numeroX);
let numeroY = 33;
{
    let numeroX = 18;
    console.log(numeroX);
    console.log(numeroY);
}

console.log(numeroX);