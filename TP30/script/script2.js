document
.querySelectorAll(".btn")
.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(`Btn ${e.target.dataset.txt} capturado`);
        cargarTexto(e.target.dataset.txt);
    })
})

function cargarTexto(num){
    fetch(`./txt/texto${num}.txt`)
    .then((res) => res.text())
    .then((res) => {
        document
        .querySelector("main")
        .innerHTML = res;
    })
}

cargarTexto(1);