document.querySelector("#saludar").addEventListener("click", () => {
    const nombre = document.querySelector("#nombre");
    const mensaje = document.querySelector("#saludo #mensaje");
    //console.log(nombre.value);
    if (nombre.value === "") {
        //console.log("Input vacio");
        mensaje.textContent = "Error! escriba su nombre en el input";
    } else {
        //console.log("input con info: " + nombre.value);
        mensaje.textContent = "Hola " + nombre.value;
    }
})

document.querySelector("#calcular").addEventListener("click", () => {
    const cantidad = document.querySelector("#cantidad");
    const mensaje = document.querySelector("#ingredientes #mensaje");
    const papas = 500;
    const leche = 100;
    const manteca = 30;
    const huevo = 1;
    if (cantidad.value === "") {
        mensaje.textContent = "Error! escriba una cantidad en el input";
    } else {
        mensaje.innerHTML = `<span class="lista">
            <span>Cantidad de ingredientes</span>
            <span>${papas * cantidad.value} grms de papas</span>
            <span>${leche * cantidad.value} ml de leche</span>
            <span>${manteca * cantidad.value} grms de manteca</span>
            <span>${huevo * cantidad.value} huevos</span>
        </span>`;
    }
})

let asistentes = [];

document.querySelector("#agregar").addEventListener("click", () => {
    //console.log("Boton agregar clickeado")
    const asistente = document.querySelector("#asistente");
    const mensaje = document.querySelector("#listaAsistencia #mensaje");
    if (asistente.value === "") {
        // mensaje de error
        mensaje.textContent = "Error! ingrese un nombre en el input";
    } else {
        // grabo string en array
        asistentes.push(asistente.value);
        mensaje.textContent = "...respuesta";
    }
    asistente.value = "";
});

document.querySelector("#ver").addEventListener("click", () => {
    //console.log("Boton ver clickeado");
    const mensaje = document.querySelector("#listaAsistencia #mensaje");
    mensaje.textContent = "";
    if (asistentes.length === 0) {
        // indicar que no hay datos
        mensaje.textContent = "Error! No hay nombres guardados";
    } else {
        // mostrar los nombres del array
        asistentes.forEach((nombre, i) => {
            i++;
            mensaje.innerHTML += `<div>${i} - ${nombre}</div>`;
        });
    }
});