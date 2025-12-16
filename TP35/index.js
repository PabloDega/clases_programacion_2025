const express = require("express");
const app = express();
const controllersFormularios = require("./controllers/formularios.controllers.js");
const middlewareValidacion = require("./middleware/validaciones.middleware.js");

const PORT = 4000;

app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.send(`<h1>Bienvenido a mi web</h1>
        <a href='/form'>Formulario</a>
        <a href='/form/v2'>Formulario v2</a>
        <a href='/form/v3'>Formulario v3</a>` )
})

app.get("/form", (req, res) => {
    res.send(`<form action="/form/datos" method="post">
    <input type="text" name="nombre" placeholder="Nombre">
    <input type="text" name="apellido" placeholder="Apellido">
    <input type="submit" value="Enviar">
</form>`)
})

app.post("/form/datos", (req, res) => {
    console.log("Post recibido")
    console.log(req.body)
    // llamado al controlador y esperamos respuesta
    const resp = controllersFormularios.formularioDatos(req.body);
    if(resp.error){
        res.send("Error al procesar formulario");
    } else {
       res.send("<h2>Formulario recibido!!!</h2>") 
    } 
})

//====== Form v2 =================

app.get("/form/v2", (req, res) => {
    res.send(`<form action="/form/v2" method="post">
    <input type="text" name="nombre" placeholder="Nombre">
    <input type="text" name="apellido" placeholder="Apellido">
    <input type="text" name="dni" placeholder="DNI sin puntos">
    <input type="submit" value="Enviar">
</form>`)
})

app.post("/form/v2", middlewareValidacion.validarFormDatos, controllersFormularios.formularioDatosV2);

//====== Form v3 =================

app.get("/form/v3", (req, res) => {
    res.send(`<form action="/form/v3" method="post">
    <input type="text" name="nombre" placeholder="Nombre">
    <input type="text" name="apellido" placeholder="Apellido">
    <input type="text" name="dni" placeholder="DNI sin puntos">
    <input type="submit" value="Enviar">
</form>`)
})

app.post("/form/v3", middlewareValidacion.validarFormDatos, controllersFormularios.formularioDatosV3);

app.use((req, res, next) => {
    res.status(404).send(`<h2>Pagina inexistente</h2>`)
})

app.listen(PORT, () => {
    console.log(`Aplicacion activa en puerto: http://localhost:${PORT}`)
})