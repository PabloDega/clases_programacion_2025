let tareas = [];

document.querySelector("#btnAgregarTarea").addEventListener("click", () => {
    let tarea = document.querySelector("#tarea");
    // validar input
    if(tarea.value === ""){return}
    // crear objeto "tarea"
    let objTarea = {
        tarea: tarea.value,
        estado: "Pendiente",
        id: tareas.length,
    }
    // agregar objeto al array global
    tareas.push(objTarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    // limpiar pagina y mostrar datos
    tarea.value = "";
    // limpiar tbody
    document.querySelector("tbody").innerHTML = "";
    tareas.forEach((tarea) => {
        //console.log(tarea);
        // cargar info actualizada
        document.querySelector("tbody").innerHTML += `<tr>
          <td>${tarea.id}</td>
          <td>${tarea.tarea}</td>
          <td>
            <div class="btn verde">${tarea.estado}</div>
          </td>
          <td>
            <div class="btn azul">Editar</div>
            <div class="btn naranja">Borrar</div>
          </td>
        </tr>`;
    })
});

function buscarDatosPrevios(){
    let tareasEnLS = localStorage.getItem("tareas");
    //console.log(tareasEnLS);
    tareasEnLS = JSON.parse(tareasEnLS) || [];
    
    tareasEnLS.forEach((tarea) => {
        //console.log(tarea);
        // cargar info actualizada
        document.querySelector("tbody").innerHTML += `<tr>
          <td>${tarea.id}</td>
          <td>${tarea.tarea}</td>
          <td>
            <div class="btn verde">${tarea.estado}</div>
          </td>
          <td>
            <div class="btn azul">Editar</div>
            <div class="btn naranja">Borrar</div>
          </td>
        </tr>`;
    })
}

buscarDatosPrevios();