import {insertDatosFormulario, selectUsuarios, selectContactos} from "../services/formularios.services.js"

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
    // 1 leer tabla usuarios
    const tablaUsuarios = await selectUsuarios();
    // 2 buscar user del req en tabla
    const busquedaUsuario = tablaUsuarios.data.findIndex((reg) => reg.usuario == req.body.usuario);
    if(busquedaUsuario  === -1){
        res.redirect("login.html?error=Error en login");
        return;
    }
    // 3 si existe verificar si las contraseñas coinciden
    if(req.body.password !== tablaUsuarios.data[busquedaUsuario].password){
        res.redirect("login.html?error=Error en login");
        return;
    }
    console.log("login extioso");
    res.redirect("/login.html?msg=Login exitoso");
}

export const leerContactos = async(req, res) => {
    // leer contactos de BD
    const query = await selectContactos();
    if(query.error){
        console.log("Error al leer contactos");
        return res.send({error: true});
    } else {
        return res.send({error: false, data: query.data});
    }
}