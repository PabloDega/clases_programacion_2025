document.querySelector("#btnVertical").addEventListener("click", () => {
    console.log("Boton vertical clickeado");
    document.querySelector("#distribucion").style.flexDirection = "column";
});
document.querySelector("#btnHorizontal").addEventListener("click", () => {
    console.log("Boton horizontal clickeado");
    document.querySelector("#distribucion").style.flexDirection = "row";
});
document.querySelector("#btnRojo").addEventListener("click", () => {
    console.log("Boton rojo clickeado");
    document.querySelector("#caja1").style.backgroundColor = "red";
});
document.querySelector("#btnVerde").addEventListener("click", () => {
    console.log("Boton verde clickeado");
    document.querySelector("#caja1").style.backgroundColor = "green";
});
document.querySelector("#btnGrande").addEventListener("click", () => {
    console.log("Boton grande clickeado");
});
document.querySelector("#btnPequeño").addEventListener("click", () => {
    console.log("Boton pequeño clickeado");
});
document.querySelector("#colorTexto").addEventListener("change", () => {
    console.log("Boton color texto clickeado");
});
document.querySelector("#btnOcultar").addEventListener("click", () => {
    console.log("Boton ocultar clickeado");
    document.querySelector("#caja3 span").style.display = "none";
});
document.querySelector("#btnMostrar").addEventListener("click", () => {
    console.log("Boton mostrar clickeado");
    document.querySelector("#caja3 span").style.display = "block";
});