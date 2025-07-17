// Metodo forEach()

let colores = ["rojo", "verde", "azul", "amarillo", "naranja"];

colores.forEach((valor, i) => {
    console.log(valor, i);
});

let numeros = [1, 2, 3, 4, 5, 6];
numeros.forEach((numero) => {
    console.log(numero * 10);
});
console.log(numeros);

// modificar mediante un forEach()

numeros.forEach((x, i) => {
    numeros[i] += 100;
});
console.log(numeros);

numeros = numeros.join();
console.log(numeros);
numeros = numeros.split(",");
console.log(numeros);

numeros.forEach((data, i) => {
    numeros[i] = Number(data);
});

console.log(numeros);

console.clear();

//let colores = ["rojos", "naranja", "amarillo", "verde", "azul", "violeta"];
//let numeros = [2, 9, 12, 5, 8, 3];

// Metodo find()
/* let query = colores.find((dato) => {
    return dato == "azul";
}); */
let query = colores.find(dato => dato == "verde");
console.log(query);

let queryIndex = colores.findIndex(dato => dato == "blanco");
console.log(queryIndex);

// Metodo reduce()
let total = numeros.reduce((acumulador, numero) => acumulador + numero);
console.log(total);

// Array de arrays
let dato = [["pablo", 123], ["rodri", 456], ["ariel", [789, 101112]]];
console.log(dato[0][1]);
console.log(dato[2][1][1]);
