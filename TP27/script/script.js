let alumnos = [
  {
    id: 1,
    nombre: "Ricardo",
    apellido: "Gonzalez",
    dni: 22544875,
    localidad: "Tres de Febrero"
  },
  {
    id: 2,
    nombre: "Carla",
    apellido: "Perez",
    dni: 33522166,
    localidad: "San Martín"
  },
  {
    id: 3,
    nombre: "José",
    apellido: "Martinez",
    dni: 41578688,
    localidad: "Tres de Febrero"
  },
  {
    id: 4,
    nombre: "Paula",
    apellido: "Gomez",
    dni: 38168726,
    localidad: "San Martín"
  }
];

let cursos = [
  {
    id: 1,
    nombre: "Programación Web",
    calificado: false,
    notas: [],
    alumnos: [1, 2, 3, 4]
  },
  {
    id: 2,
    nombre: "Pensamiento computacional",
    calificado: true,
    notas: [10, 9],
    alumnos: [2, 4]
  },
  {
    id: 3,
    nombre: "Sublimación",
    calificado: false,
    notas: [],
    alumnos: [1, 2]
  },
  {
    id: 4,
    nombre: "Impresión 3D",
    calificado: true,
    notas: [10, 9, 5],
    alumnos: [2, 3, 4]
  }
];

cursos.forEach((dato) => {
  document.querySelector("#cursos").innerHTML += `<div class="curso">
            <h1>${dato.nombre}</h1>
            <span>Cantidad de alumnos: ${dato.alumnos.length}</span>
            <span>Curso calificado: ${dato.calificado}</span>
            <div class="btn" data-curso="${dato.id}">Detalles</div>
        </div>`;
});

document.querySelectorAll("#cursos .btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log("Boton detalle presionado", e.target.dataset);
    mostrarCurso(e.target.dataset.curso);
  })
});

function mostrarCurso(id) {
  console.log("Funcion mostrar con Id: ", id);
  const cursoElegido = cursos.find((dato) => dato.id == id);
  console.log(cursoElegido);
  document.querySelector("#detalles").innerHTML = `<h1>Curso: ${cursoElegido.nombre}</h1>
  <span>Cantidad de alumnos: ${cursoElegido.alumnos.length}</span>
  <span>
    <h2>Lista de alumnos</h2>
    <div id="alumnos">${crearAlumnos(cursoElegido)}</div>
  </span>`;
}

function crearAlumnos(cursoElegido){
  let htmlSalida = ``;
  cursoElegido.alumnos.forEach((idDelAlumno) => {
    const infoAlumno = alumnos.find((objetoAlumno) => objetoAlumno.id === idDelAlumno);
    //console.log(infoAlumno);
    htmlSalida += `<div class="alumno">
        <span>Nombre: ${infoAlumno.nombre}</span>
        <span>Apellido: ${infoAlumno.apellido}</span>
        <span>DNI: ${infoAlumno.dni}</span>
        <span>Localidad: ${infoAlumno.localidad}</span>
    </div>`;
  })
  return htmlSalida;
}