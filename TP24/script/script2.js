document.querySelector("#saludar").addEventListener("click", () => {
    const nombre = document.querySelector("#nombre");
    const mensaje = document.querySelector("#saludo #mensaje");
    //console.log(nombre.value);
    if(nombre.value === ""){
        //console.log("Input vacio");
        mensaje.textContent = "Error! escriba su nombre en el input";
    }else{
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
    if(cantidad.value === ""){
        mensaje.textContent = "Error! escriba una cantidad en el input";
    }else{
        mensaje.innerHTML = `<span class="lista">
            <span>Cantidad de ingredientes</span>
            <span>${papas * cantidad.value} grms de papas</span>
            <span>${leche * cantidad.value} ml de leche</span>
            <span>${manteca * cantidad.value} grms de manteca</span>
            <span>${huevo * cantidad.value} huevos</span>
        </span>`;
    }
})