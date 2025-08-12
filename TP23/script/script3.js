document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    validarFormulario();
});

function validarFormulario(){
    let resultado = true;
    let errores = [];
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const dni = document.querySelector("#dni");

    if(nombre.value === "" || apellido.value === "" || dni.value === ""){
        console.log("Debe completar todos los campos");
        resultado = false;
        errores.push("Debe completar todos los campos");
    }
}