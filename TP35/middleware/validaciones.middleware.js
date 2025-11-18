const validarFormDatos = (req, res, next) => {
    console.log("--> Paso por el middleware");
    if(req.body.nombre === "" || req.body.apellido === "" || req.body.dni === ""){
        res.send("Completar todos los campos");
    } else if( isNaN( parseInt(req.body.dni) ) ){
        res.send("El dni solo puede contener numeros")
    } else {
       next(); 
    }
}

module.exports = {
    validarFormDatos,
}