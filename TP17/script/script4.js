console.log("Ping script 4");

// Operadores matemáticos

let numA = 20;
let numB = 8;

console.log(numA + numB);
console.log(numA - numB);
console.log(numA * numB);
console.log(numA / numB);
console.log(numA % numB);

let numC = 10;
numC += 4;
numC -= 5;
numC *= 2;
numC /= 3;
console.log(numC);

numC = ++numC;
console.log(numC);
numC++;
console.log(numC);
numC--;
console.log(numC);

// Operadores lógicos

let datoA = 10;
let datoB = 20;

console.log(datoA > datoB);
console.log(datoA < datoB);

// Igualdad simple
console.log(datoA == datoB);
let datoC = 10;
console.log(datoA == datoC);
console.log(datoA != datoC);
let datoD = "10";
console.log(datoA == datoD);
// Igualdad estricta
console.log(datoA === datoD);
console.log(datoA !== datoD);

// && (and) y || (or)
console.log(2 == 2 && 3 == 4);
console.log(2 == 1 || 3 == 3);

let booleano = true;
console.log(!booleano);