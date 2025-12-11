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

export const selectUsuarios = async() => {
    try {
        const resp = await query("SELECT * FROM usuarios WHERE eliminado = 0");
        console.log(resp[0]);
        return {error: false, data: resp[0]}
    } catch (err) {
        console.error("Error: " + err);
        return {error: true, msg: err.msg};
    }
}

export const selectContactos = async() => {
    try {
        const resp = await query("SELECT * FROM formulario_contacto");
        return {error: false, data: resp[0]}
    } catch (error) {
        console.log("Error al leer BD");
        return {error: true}
    }
}