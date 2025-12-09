export const validarFormulario = async (req, res, next) => {
    console.log("--> validarFormulario");
    // validar body
    //console.log(req.body);
    const nombre = req.body.nombre.trim().toLowerCase().split("");
    const telefono = Number(req.body.telefono.trim());
    //console.log(nombre, telefono);
    if(nombre.length === 0 || isNaN(telefono) || telefono === 0){
        console.log("Error en la validacion");
        //res.send("<h2>Error en la validacion</h2>");
        res.redirect("/contacto.html?error=Error en la validacion");
        return;
    }
    console.log("Validacion exitosa");
    next();
}

export const validarLogin = async(req, res, next) => {
    console.log("--> Validacion login iniciada");
    // validacion......
    const usuario = req.body.usuario.trim();
    const password = req.body.password.trim();
    if(usuario.length === 0 || password.length === 0){
        console.log("Error en validacion de login");
        res.redirect("/login.html?error=Error al validar login");
        return;
    }
    console.log("Validacion exitosa");
    next();
}