console.log(window);
console.log(document);

console.clear();

console.log(document.querySelector("h1"));

console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByClassName("parrafo"));
console.log(document.getElementById("contenidoPrincipal"));

console.log(document.querySelectorAll("p"));

console.log(document.querySelectorAll(".parrafo"));

console.log(document.querySelector("#contenidoPrincipal"));

console.clear();

console.log(document.querySelector("main h2").textContent);

document.querySelector("main h2").textContent = "Nuevo título desde JS";

document.querySelector("#contenidoPrincipal").textContent += " - Modificado desde JS";

document.querySelector("main").innerHTML += `<p class="parrafo">Parrafo 5</p>`;

let h2 = document.querySelector("h2");
console.log(h2);
h2.textContent = "Nuevo título desde JS";

document.querySelector("#textoInput").value = "Texto agregado desde JS";

document.querySelector("#divEstilo").style.backgroundColor = "red";
document.querySelector("#divEstilo").style.width = "20px";
document.querySelector("#divEstilo").style.height = "20px";
document.querySelector("#divEstilo").style.border = "4px solid black";


document.querySelector("#destino").innerHTML += "<p>Texto agregado desde JS</p>";

const element = document.createElement("p");
element.textContent = "Parrafo creado con createElement";
document.querySelector("#destino").appendChild(element);