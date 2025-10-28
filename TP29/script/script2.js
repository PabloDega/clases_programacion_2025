const datos = [
  {
    nombre: "Pablo",
    apellido: "Lopez",
    mail: "lopez@yahoo.com.ar",
    direccion: "Calle falsa 123",
    telefono: 23451234
  },
  {
    nombre: "Juan",
    apellido: "Gonzalez",
    mail: "gonzalez@yahoo.com.ar",
    direccion: "Calle falsa 456",
    telefono: 23452345
  },
  {
    nombre: "Pedro",
    apellido: "Ibañez",
    mail: "ibañez@yahoo.com.ar",
    direccion: "Calle falsa 789",
    telefono: 23453456
  },
  {
    nombre: "Mateo",
    apellido: "Perez",
    mail: "perez@yahoo.com.ar",
    direccion: "Calle falsa 101",
    telefono: 23455678
  }
];


// funcion sincronica
/* function getDatos(){
    return datos;
}

console.log(getDatos()); */

// Funcion asincronica

/* function getDatos(){
    //return datos;
    setTimeout(() => {return datos}, 2000);
}

console.log(getDatos()); */

// Convertir en promesa para esperarla

/* const getDatos = () => {
    //return datos;
    //setTimeout(() => {return datos}, 2000);
    return new Promise((res, rej) => {
        setTimeout(() => res(datos), 2000);
    })
}

getDatos().then((datos) => {console.log(datos)})

// consumir con async await
async function getDatosAsync(){
    console.log(await getDatos());
} */

// Capturar errores

const getDatos = () => new Promise((res, rej) => {
  setTimeout(() => {
      //res(datos)
      rej("Error al obtener los datos")
  }, 2000)
});

// Solucion con then y catch
getDatos()
  .then((datos) => console.log(datos))
  .catch((error) => console.log(error))

// Solucion con async await y try catch
async function getDatosAsync() {
  try {
    console.log(await getDatos());
  } catch (error) {
    console.log(error);
  }
}

getDatosAsync()