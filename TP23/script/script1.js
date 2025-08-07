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


