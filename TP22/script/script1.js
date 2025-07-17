// Mochila digital

/* let material1 = "Lápiz";
let material2 = "Cuaderno";
let material3 = "Goma"; */

let mochila = ["Lápiz", "Cuaderno", "Goma", "Regla", "Colores"];

console.log("Mochila completa:", mochila);

// Acceder a un item especifico
console.log("El segundo elemento es:", mochila[1]);

// Actualizar un item

mochila[2] = "Sacapuntas";
console.log("Mochila actualizada:", mochila);


// Largo del array
console.log("Tengo", mochila.length, "materiales en mi mochila.");

// Seleccionar ultimo item
console.log("El primer material es:", mochila[0]);
console.log("El último material es:", mochila[mochila.length - 1]);

// Agregar y quitar items
mochila.push("Marcador");
console.log("Mochila después de agregar marcador:", mochila);

let itemRemovido = mochila.pop();
console.log("Mochila después de quitar el último:", mochila);
console.log("El material que quité fue:", itemRemovido);

// Vaciar mochila

mochila = [];
console.log("Mi mochila ahora está vacía:", mochila);