const express = require("express");
const app = express();

const PORT = 4000;

app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a mi web</h1><a href='/form'>Formulario</a>")
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
    res.send("<h2>Formulario recibido!!!</h2>")
})

app.use((req, res, next) => {
    res.status(404).send(`<h2>Pagina inexistente</h2>`)
})

app.listen(PORT, () => {
    console.log(`Aplicacion activa en puerto: http://localhost:${PORT}`)
})