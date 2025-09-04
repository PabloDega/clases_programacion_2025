console.log("Script2.js");

let ejemplo = {
    nombre: "Pablo",
    apellido: "Deganis",
    nacimientoY: 1983
}

function Persona(nombre, apellido, nacimientoY){
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimientoY = nacimientoY;
    this.edad = () => {
        let hoy = new Date();
        return hoy.getFullYear() - this.nacimientoY;
    }
}
const persona1 = new Persona("Pablo", "Dega", 1983);
console.log(persona1);
console.log(persona1.edad());