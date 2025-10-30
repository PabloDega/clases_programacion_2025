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