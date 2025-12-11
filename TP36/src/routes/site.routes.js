import express from "express";
const rutas = express.Router();
import {formularioContacto, postLogin, leerContactos} from "../controllers/formularios.controllers.js";
import {validarFormulario, validarLogin} from "../middlewares/validador.middleware.js"

rutas.post("/contacto", validarFormulario, formularioContacto);

rutas.get("/contactos/leer", leerContactos)

rutas.post("/login", validarLogin, postLogin);


export { rutas }