/* document.querySelector('#btnHome').addEventListener('click', (e) => {
    console.log('click en Home');
    console.log(e.target.dataset.boton);
    console.log(e.target.dataset.url);
});

document.querySelector('#btnProds').addEventListener('click', (e) => {
    console.log('click en Productos');
    console.log(e.target.dataset.boton);
    console.log(e.target.dataset.url);
});

document.querySelector('#btnCont').addEventListener('click', (e) => {
    console.log('click en Contacto');
    console.log(e.target.dataset.boton);
    console.log(e.target.dataset.url);
}); */

document.querySelectorAll('.btnNav').forEach((boton) => {
    boton.addEventListener('click', (e) => {
        console.log(`click en ${e.target.dataset.boton}`);
        console.log("URL: " + e.target.dataset.url);
    });
});