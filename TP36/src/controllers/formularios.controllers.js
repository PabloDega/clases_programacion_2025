import {insertDatosFormulario} from "../services/formularios.services.js"

export const formularioContacto = async (req, res) => {
    console.log("--> formularioContacto");
    const resp = await insertDatosFormulario(req.body);
    if(resp.error){
        //res.send(`<h2>Error al grabar los datos: ${resp.msg}</h2>`);
        res.redirect("/contacto.html?error=Error al grabar los datos en BD");
        return;
    } else {
        //res.send("<h2>datos grabados exitosamente</h2>");
        res.redirect("/contacto.html?msg=Formulario enviado con exito");
        return;
    }
}

export const postLogin = async (req, res) => {
    console.log("--> postLogin");
    // proceso de login.......

    console.log("login extioso");
    res.redirect("/login.html?msg=Login exitoso");
}