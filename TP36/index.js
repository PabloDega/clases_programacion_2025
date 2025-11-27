import express from "express";
import {rutas} from "./src/routes/site.routes.js";
import "dotenv/config";
const PORT = 4001;

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", rutas);

app.use((req, res, next) => {
  res.status(404).send('<h1>no se pudo encontrar esa página!</h1>');
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`)
})