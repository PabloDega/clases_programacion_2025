// [Arrays]

// Ejemplo de arrays
const ejemplo1 = ["texto", "otro texto", "mas texto"];

const ejemplo2 = ["texto", 123, true, null, undefined, ["otro", "array"]];

//Manejo de Arrays
const numeros = [2, 9, 11, 52, 7, 26, 3];
console.log(numeros);

console.log(numeros[2]);

// Agregar un dato
numeros.push(222);
console.log(numeros);

numeros.unshift(333);
console.log(numeros);

// Quitar un dato
numeros.pop();
console.log(numeros);

numeros.shift();
console.log(numeros);

// Metodo splice()
console.clear()

let letras =["a", "b", "c", "d"];
console.log(letras);

let letrasEliminadas = letras.splice(1, 2);
console.log(letras);
console.log(letrasEliminadas);

letras.splice(1, 0, "b", "c");
console.log(letras);

letras.splice(4, 0, "e", "f");
console.log(letras);

// Unir y separar datos
console.clear();

let unido = numeros.join("/");
console.log(unido);

let separado = unido.split("/");
console.log(separado);

// Ordenar alfabeticamente
console.clear();
let caracteres = ["A", "C", "E", "B", "D"];
console.log(caracteres);

caracteres.sort();
console.log(caracteres);

// ordenar numeros
console.log(numeros);
numeros.sort((a, b) => a - b);
console.log(numeros);

console.clear();

// Copiar un array

// copia referencial

let numeros1 = [1, 2, 3, 4];
let numeros2 = numeros1;
console.log(numeros1);
console.log(numeros2);

numeros1.push(5);
console.log(numeros1);
console.log(numeros2);

// Shallow copy
let letras1 = ["A", "B", "C"];
let letras2 = [...letras1];

letras1.push("D");
console.log(letras1);
console.log(letras2);

// Limites del shallow copy
let arrayAnidado1 = [1, 2, ["A", "B"]];
let arrayAnidado2 = [...arrayAnidado1];

arrayAnidado1.push(3);
console.log(arrayAnidado1);
console.log(arrayAnidado2);

arrayAnidado1[2].push("C");
console.log(arrayAnidado1);
console.log(arrayAnidado2);

console.clear();

// Deep clone

let arrayAnidado3 = JSON.stringify(arrayAnidado1);
arrayAnidado3 = JSON.parse(arrayAnidado3);
console.log(arrayAnidado3);

arrayAnidado1[2].push("D");
console.log(arrayAnidado1);
console.log(arrayAnidado3);