import express from "express";
const rutas = express.Router();
import {formularioContacto, postLogin} from "../controllers/formularios.controllers.js";
import {validarFormulario, validarLogin} from "../middlewares/validador.middleware.js"

rutas.post("/contacto", validarFormulario, formularioContacto);

rutas.post("/login", validarLogin, postLogin);

export { rutas }