let tareas = [];

document.querySelector("#btnAgregarTarea").addEventListener("click", () => {
  let tarea = document.querySelector("#tarea");
  // validar input
  if (tarea.value === "") { return }
  // crear objeto "tarea"
  let objTarea = {
    tarea: tarea.value,
    estado: "Pendiente",
    id: tareas.length,
  }
  // agregar objeto al array global
  tareas.push(objTarea);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  // crear la vista
  // limpiar pagina y mostrar datos
  tarea.value = "";
  crearVista();
});

function buscarDatosPrevios() {
  let tareasEnLS = localStorage.getItem("tareas");
  tareasEnLS = JSON.parse(tareasEnLS) || [];
  // pasarlo como variable global
  tareas = tareasEnLS;
  crearVista()
}

buscarDatosPrevios();

function crearVista() {
  document.querySelector("tbody").innerHTML = "";
  tareas.forEach((tarea) => {
    if(tarea.estado == "Eliminada") {return}
    // cargar info actualizada
    document.querySelector("tbody").innerHTML += `<tr>
          <td>${tarea.id}</td>
          <td>${tarea.tarea}</td>
          <td>
            <div class="btn verde btnEstado" data-id=${tarea.id}>${tarea.estado}</div>
          </td>
          <td>
            <div class="btn azul btnEditar">Editar</div>
            <div class="btn naranja btnBorrar" data-id=${tarea.id}>Borrar</div>
          </td>
        </tr>`;
  });
  // agregar eventos
  document.querySelectorAll(".btnEstado").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // ver estado previo de la propiedad para asignar nuevo estado
      if(tareas[e.target.dataset.id].estado == "Completa"){
        tareas[e.target.dataset.id].estado = "Pendiente";
      }else{
        tareas[e.target.dataset.id].estado = "Completa";
      }
      // guardar modificacion en LS
      localStorage.setItem("tareas", JSON.stringify(tareas));
      crearVista();
    })
  })

  document.querySelectorAll(".btnBorrar").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      tareas[e.target.dataset.id].estado = "Eliminada";
      // guardar modificacion en LS
      localStorage.setItem("tareas", JSON.stringify(tareas));
      crearVista();
    })
  })
}