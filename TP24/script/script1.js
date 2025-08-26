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

let fontsize = 1;

document.querySelector("#btnGrande").addEventListener("click", () => {
    if(fontsize > 3){
        return;
    }
    fontsize += 0.1;
    console.log("Boton grande clickeado");
    document.querySelector("#caja2 > span:first-child").style.fontSize = `${fontsize}em`;
});
document.querySelector("#btnPequeño").addEventListener("click", () => {
    if(fontsize < 0.5){
        return;
    }
    fontsize -= 0.1;
    console.log("Boton pequeño clickeado");
    document.querySelector("#caja2 > span:first-child").style.fontSize = `${fontsize}em`;
});

document.querySelector("#colorTexto").addEventListener("change", (e) => {
    console.log("Boton color texto clickeado");
    console.log(e.target.value);
    document.querySelector("#caja2 > span:first-child").style.color = e.target.value;
});

document.querySelector("#btnOcultar").addEventListener("click", () => {
    console.log("Boton ocultar clickeado");
    document.querySelector("#caja3 span").style.display = "none";
});
document.querySelector("#btnMostrar").addEventListener("click", () => {
    console.log("Boton mostrar clickeado");
    document.querySelector("#caja3 span").style.display = "block";
});