export const validarFormulario = async (req, res, next) => {
    console.log("--> validarFormulario");
    // validar body
    //console.log(req.body);
    const nombre = req.body.nombre.trim().toLowerCase().split("");
    const telefono = Number(req.body.telefono.trim());
    //console.log(nombre, telefono);
    if(nombre.length === 0 || isNaN(telefono) || telefono === 0){
        console.log("Error en la validacion");
        res.send("<h2>Error en la validacion</h2>");
        return;
    }
    console.log("Validacion exitosa");
    next();
}