document
.querySelector("#btnChiste")
.addEventListener("click", () => {
    fetch("http://www.official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((res) => {
        mostrarChiste(res);
    })
})

function mostrarChiste(chiste){
    console.log(chiste);
    let vista = `<span>${chiste.setup}</span><span>${chiste.punchline}</span>`;
    document.querySelector("#chiste").innerHTML = vista;
}

// https://catfact.ninja/fact

document
.querySelector("#btnHecho")
.addEventListener("click", () => {
    fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((res) => {
        mostrarHecho(res);
    })
})

function mostrarHecho(hecho){
    console.log(hecho);
    let vista = `<span>${hecho.fact}</span>`;
    document.querySelector("#hecho").innerHTML = vista;
}

// https://dog.ceo/api/breeds/image/random

document
.querySelector("#btnPerro")
.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) => {
        mostrarPerro(res);
    })
})

function mostrarPerro(perro){
    console.log(perro);
    let vista = `<img src="${perro.message}">`;
    document.querySelector("#perro").innerHTML = vista;
}

let click = new Event("click");

document.querySelector("#btnChiste").dispatchEvent(click);
document.querySelector("#btnHecho").dispatchEvent(click);
document.querySelector("#btnPerro").dispatchEvent(click);


// https://api.agify.io/?name=${}

document
.querySelector("#btnEdad")
.addEventListener("click", () => {
    // primero capturo el nombre del input
    const nombre = document.querySelector("#nombre").value;
    console.log(nombre)
    // validar el dato
    if(nombre === ""){
        alert("No ingreso un nombre para calcular la edad!!!");
        return;
    };
    // construir url para el fetch con el nombre
    const url = `https://api.agify.io/?name=${nombre}`
    // ejecutar fecth y renderizar resultado
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
        mostrarEdad(res);
    })
})

function mostrarEdad(edad){
    console.log(edad);
    let vista = `<span>Edad calculada para ${edad.name}: ${edad.age}</span>`;
    document.querySelector("#edad").innerHTML = vista;
}