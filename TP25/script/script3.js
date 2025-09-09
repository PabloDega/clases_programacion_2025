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

//--------------------------------

class Animal{
    constructor(nombre, color, altura, peso, region){
        this.nombre = nombre;
        this.color = color;
        this.altura = altura;
        this.peso = peso;
        this.region = region;
    }
}

let animales = [];

 animales.push(new Animal("Elefante", "gris", 3000, 800, "Asia"));
 animales.push(new Animal("Toro", "violeta", 1000, 2500, "America"));
 animales.push(new Animal("Hipopotamo", "Gris", 2000, 2000, "Asia"));
 animales.push(new Animal("Jirafa", "Amarillo", 6000, 800, "Asia"));
 animales.push(new Animal("Jabalí", "Negro", 1500, 300, "America"));

console.clear();
console.log(animales);

// Metodo find()

function buscarAnimal(nombre){
    return animales.find((info) => info.nombre === nombre)
}

console.log(buscarAnimal("Elefante"));

// metodo filter()

function filtrarAnimales(region){
    return animales.filter((info) => info.region === region);
}

console.log(filtrarAnimales("America"));