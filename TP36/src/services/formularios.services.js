import {query} from "../config/database.js"

export const insertDatosFormulario = async (datos) => {
    console.log("--> insertDatosFormulario");
    try {
        // intentar grabar en BD
        const resp = await query(`INSERT into formulario_contacto (nombre, telefono) VALUES ("${datos.nombre}", ${datos.telefono})`);
        return {error: false};
    } catch (err) {
        console.error("Error 20-501: " + err);
        return {error: true, msg: err.msg};
    }
}