if(2 == 2){
    console.log("Condicional verdadero");
} else {
    console.log("Condicional falso");
}

// Scoope
let resp;
if(2 > 3){
    resp = "Numero mayor";
} else {
    resp = "Numero menor";
}
console.log(resp);

// If else if

let semaforo = "lila";

if(semaforo == "verde"){
    console.log("Avanzar");
} else if(semaforo == "amarillo"){
    console.log("Precaución");
} else if(semaforo == "rojo"){
    console.log("Detenerse!!!");
} else {
    console.error("Semaforo roto");
}

// Cargar monto de compra ("window.prompt()") / Si > $50.000 descuento del 25% / Si > $20.000 descuento 10% - sino ningun descuento - devolver valor por consola ("console.log()")

/* let monto = window.prompt("Ingresar monto de la compra");

if(monto > 50000){
    console.log("25% de descuento");
    console.log("Valor a pagar:", (monto * 0.75));
} else if(monto > 20000){
    console.log("10% de descuento");
    console.log("Valor a pagar:", (monto * 0.9));
} else {
    console.log("Sin descuento");
    console.log("Valor a pagar:", (monto));
} */

let edad = window.prompt("Ingrese su edad");

if(edad > 17){
    console.log("Mayor");
} else {
    console.log("Menor");
}

// Operador ternario
let respEdad = edad > 17 ? "Mayor" : "Menor";
console.log(respEdad);