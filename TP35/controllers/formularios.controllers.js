const fs = require("fs");

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

const formularioDatosV3 = async (req, res) => {
    console.log("Controller formularioDatosV3 llamado");
    console.log(req.body);
    let datos = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni
    }
    datos = JSON.stringify(datos) + ",";
    // grabar la info en un archivo JSON
    fs.appendFile("./data/formularios.json", datos, (error) => {
        console.log(error);
        return;
    })
    res.send("Post recibido, gracias");
}

module.exports = {
    formularioDatos,
    formularioDatosV2,
    formularioDatosV3
}