class Persona{
    constructor(nombre, apellido, nacimientoY){
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimientoY = nacimientoY;
    }
    saludar(){
        return `Hola ${this.nombre}`;
    }
}

let persona1 = new Persona("Sergio", "Lopez", 1995);
console.log(persona1);
console.log(persona1.saludar());