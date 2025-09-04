const curso = {
    nombre: "Programacion web",
    sede: "San Miguel",
    turno: "Tarde",
    inscriptos: 26
}

console.log(curso);

console.log(curso.sede);
console.log(curso["turno"]);

// Modificar una propiedad

curso.turno = "noche";
console.log(curso);

// Añadir una propiedad
