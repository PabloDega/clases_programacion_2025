import {insertDatosFormulario} from "../services/formularios.services.js"

export const formularioContacto = async (req, res) => {
    console.log("--> formularioContacto");
    const resp = await insertDatosFormulario(req.body);
    // respuesta (resp) esperada del servicio insertDatosFormulario: {error: false} o {error:true, msg: "txt", err_code: 20-501}
    if(resp.error){
        res.send(`<h2>Error al grabar los datos: ${resp.msg}</h2>`);
        return;
    } else {
        res.send("<h2>datos grabados exitosamente</h2>");
        return;
    }
}