console.log("Ping script3.js");

// Tipos de datos

let numeros = 17;
let string = "Texto en JS";
let booleano = true; // false
let nulo = null;
let indefinido;
let array = ["texto", 55, false, null, undefined, 58];
let objeto = {
    edad: 42,
    nombre: "Pablo",
    estado: true,
};

console.log(numeros);
console.log(typeof(numeros));
console.log(typeof(string));
console.log(typeof(booleano));
console.log(typeof(nulo));
console.log(typeof(indefinido));
console.log(typeof(array));
console.log(typeof(objeto));

let numA = "22";
numA = Number(numA);
let numB = 30;
console.log(numA + numB);

let valorPi = '3.14159 asdasdasda asd as d';
console.log(valorPi, typeof(valorPi));

let valorNum = Number(valorPi);
console.log(valorNum, typeof(valorNum));

let valorInt = parseInt(valorPi);
console.log(valorInt, typeof(valorInt));

let valorFloat = parseFloat(valorPi);
console.log(valorFloat, typeof(valorFloat));