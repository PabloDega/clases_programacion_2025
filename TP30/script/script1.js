console.log("Archivo script1.js vinculado");

fetch("./data/data.json")
    .then((res) => {
        //console.log(res);
        if (!res.ok) {
            throw new Error(`Error en el fetch: ${res.status} - ${res.statusText}`);
        }
        return res.json();
    })
    .then((res) => {
        console.log(res);
        crearVista(res);
    })
    .catch((error) => {
        console.log("::Error detectado::" + error)
    })

function crearVista(datos) {
    let vista = `<table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Direccion</th>
                    <th>Mail</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody>`;
    datos.forEach((info) => {
        vista += `<tr>
                    <td>${info.nombre}</td>
                    <td>${info.apellido}</td>
                    <td>${info.direccion}</td>
                    <td>${info.mail}</td>
                    <td>${info.telefono}</td>
                </tr>`;
    })
    vista += `</tbody>
        </table>`;
    document.querySelector("#salida").innerHTML = vista;
}