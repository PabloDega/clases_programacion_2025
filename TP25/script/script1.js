const curso = {
    nombre: "Programacion web",
    sede: "San Miguel",
    turno: "Tarde",
    inscriptos: 26,
    saludar: () => {
        console.log("Hola alumnos de " + curso.nombre);
    },
    estado: () => {
        if(curso.inscriptos > 25){
            console.log("Curso completo");
        } else {
            console.log("Quedan vacantes");
        };
    }
}

console.log(curso);

console.log(curso.sede);
console.log(curso["turno"]);

// Modificar una propiedad
curso.turno = "noche";
console.log(curso);

// Añadir una propiedad
curso.ciclo = 2025;
console.log(curso);

// Eliminar una propiedad
delete curso.sede;
console.log(curso);
console.clear();

// Loop
for(const dato in curso){
    //console.log(dato);
    console.log(curso[dato]);
}

console.clear();

curso.saludar();
curso.nombre = "Diseño Web";
curso.saludar();

curso.estado();
curso.inscriptos = 8;
curso.estado();
