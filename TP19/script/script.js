// Funciones

console.log("Hola mundo");

// Funciones declaradas
function hola(nombre){
    console.log("Hola " + nombre)
}

hola("Pablo");
hola("Juan");

// Funciones anonimas
const chau = function(nombre){
    console.log("Chau " + nombre);
}

chau("Pablo");

// Funciones flecha () => {}
const bienvenido = (nombre) => {
    console.log("Bienvenido " + nombre);
}

bienvenido("Pablo");

// Return

// capturar return
let retorno = hola("Test de retorno");
console.log(retorno);

// declarar return
function calculo(a, b){
    let suma = a + b;
    return suma;
}
retorno = calculo(2, 5);
console.log(retorno);

// opcion 2
function calculo2(a, b){return a + b}
console.log(calculo2(3, 9));

// return en funcion flecha
const calculoFlecha = (a, b) => {return a + b};
console.log(calculoFlecha(5, 55));

// opcion 2
const calculoFlecha2 = (a, b) => a + b;
console.log(calculoFlecha2(25, 4));

// IIFE - Inmediately Invoked Function Expressions
(function iifePrivada(){
    console.log("Funcion IIFE privada");
})();

//iifePrivada();

// Callbacks
console.clear();

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const dividir = (a, b) => a / b;
const multiplicar = (a, b) => a * b;

console.log(multiplicar(10, 7));

const calculadora = (a, b, cb) => cb(a, b);

console.log(calculadora(20, 80, multiplicar));