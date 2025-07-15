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