document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const resultado = validarForm();
  if (resultado) {
    console.log("Formulario validado con exito");
  } else {
    console.log("No se pudo validar la informacion");
  }
});

function validarForm() {
  //console.log("Validacion");
  let resultado = true;
  let errores = [];

  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const dni = document.querySelector("#dni");

  if (nombre.value === "" || apellido.value === "" || dni.value === "") {
    resultado = false;
    errores.push("Debe completar todos los campos del formulario");
  }

  if (isNaN(dni.value)) {
    resultado = false;
    errores.push("El campo DNI solo acepta numeros");
  }

  if (dni.value.length !== 8) {
    resultado = false;
    errores.push("El DNI debe tener 8 digitos");
  }

  const letrasAprobadas = "abcdefghijklmnñopqrstuvwxyzáéíóúäëïöü' ".split("");

  const arrayNombre = nombre.value.split("");

  arrayNombre.forEach((letra) => {
    //console.log(letra.toLowerCase());
    let query = letrasAprobadas.indexOf(letra.toLowerCase());
    if(query === -1){
      resultado = false;
      errores.push("El campo nombre solo acepta letras");
    }
  });
  
  const arrayApellido = apellido.value.split("");

  arrayApellido.forEach((letra) => {
    //console.log(letra.toLowerCase());
    let query = letrasAprobadas.indexOf(letra.toLowerCase());
    if(query === -1){
      resultado = false;
      errores.push("El campo apellido solo acepta letras");
    }
  });

  //console.log(errores);
  mostrarErrores(resultado, errores);

  return resultado;
}

function mostrarErrores(resultado, errores) {
  if (resultado) {
    // mostrar mensaje de exito
    document.querySelector("#respuestas > div").innerHTML = `El formulario fue validado con exito`;
    document.querySelector("body").style.backgroundColor = "darkcyan";
  } else {
    // mostrar mensaje de error y detalle de errores
    document.querySelector("#respuestas > div").innerHTML = `No se pudo validar el formulario`;
    document.querySelector("#respuestas > div").innerHTML += `<br>-${errores.join("<br>-")}`;
    document.querySelector("body").style.backgroundColor = "darkred";
  }
}