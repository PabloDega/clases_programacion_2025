document.querySelector("#verRegistros").addEventListener("click", async() => {
    await fetch("contactos/leer")
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
    })
})