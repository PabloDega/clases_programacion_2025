document.querySelector("#botonSaludar").addEventListener("click", (e) => {
    console.log("Hola mundo!");
});

document.querySelector("#eventosMouse").addEventListener("click", (e) => {
    console.log("Evento click");
});
document.querySelector("#eventosMouse").addEventListener("mouseover", (e) => {
    console.log("Evento mouseover");
});
document.querySelector("#eventosMouse").addEventListener("mouseout", (e) => {
    console.log("Evento mouseout");
});
document.querySelector("#eventosMouse").addEventListener("mousedown", (e) => {
    console.log("Evento mousedown");
});
document.querySelector("#eventosMouse").addEventListener("mouseup", (e) => {
    console.log("Evento mouseup");
});
document.querySelector("#eventosMouse").addEventListener("wheel", (e) => {
    console.log("Evento wheel");
});

document.querySelector("#eventosMouse").addEventListener("mousemove", (e) => {
    //console.log("Evento mousemove");
    //console.log(e.offsetX + "/" + e.offsetY)
    document.querySelector("#eventosMouse > span").textContent = e.offsetX + "/" + e.offsetY;
});

document.querySelector("#eventosMouse").addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

document.querySelector("#eventosTecla1").addEventListener("keydown", (e) => {
    console.log("Evento keydown");
});
document.querySelector("#eventosTecla1").addEventListener("keyup", (e) => {
    console.log("Evento keyup");
});
document.querySelector("#eventosTecla2").addEventListener("keypress", (e) => {
    console.log(e.key);
});

document.querySelector("#foco").addEventListener("focus", (e) => {
    console.log("Evento foco");
    // document.querySelector("#foco").style.background = "cyan";
    e.target.style.background = "cyan";
});

document.querySelector("#foco").addEventListener("blur", (e) => {
    console.log("Evento desenfocar");
    e.target.style.background = "white";
});