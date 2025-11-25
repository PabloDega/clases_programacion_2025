import express from "express";
const rutas = express.Router();
import {formularioContacto} from "../controllers/formularios.controllers.js"

rutas.post("/contacto", formularioContacto)

rutas.post("/login")

export { rutas }