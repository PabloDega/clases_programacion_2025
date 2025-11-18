const formularioDatos = (datos) =>  {
    console.log("Controller formularioDatos llamado");
    console.log(datos);
    // bla bla del proceso
    return {error: true}
}

const formularioDatosV2 = async (req, res) => {
    console.log("Controller formularioDatosV2 llamado");
    console.log(req.body);
    res.send("Post recibido, gracias");
}

module.exports = {
    formularioDatos,
    formularioDatosV2
}