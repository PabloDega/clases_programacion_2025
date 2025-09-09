document.querySelector("#registrar").addEventListener("click", () => {
    console.log("Click a registrar");
    // 1 Capturar los datos del usuario
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const telefono = document.querySelector("#telefono");
    // 2 validar los datos
    if(nombre.value === "" || apellido.value === "" || telefono.value === ""){
        // 2-b mostrar error
        return;
    }
    // 3 Crear instancia de clase y agregar al array
    fichas.push(new Ficha(nombre.value, apellido.value, telefono.value))
    // 4 vaciar campos
    nombre.value = "";
    apellido.value = "";
    telefono.value = "";
    // 5 (opcional) mostrar largo del array al usuario
    document.querySelector("#vista h2").innerHTML = `Registros <span>${fichas.length}</span>`;
});

document.querySelector("#mostrar").addEventListener("click", () => {
    console.log("Click a mostrar")
});

document.querySelector("#vaciar").addEventListener("click", () => {
    console.log("Click a vaciar")
});

let fichas = [];

class Ficha{
    constructor(nom, ape, tel){
        this.nombre = nom;
        this.apellido = ape;
        this.telfono = tel;
    }
}