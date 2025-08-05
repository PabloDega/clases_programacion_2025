let tieneMapa = false;

if (tieneMapa) {
    console.log("Podemos avanzar!!");
} else {
    console.log("No podemos avanzar.");
}

let esDeNoche = true;

if (esDeNoche) {
    console.log("Es de noche, debemos descansar.");
} else {  
    console.log("Es de día, podemos seguir explorando.");
}

let energia = 66; // de 0 a 100

// si tiene mas de 50 de energia que avance sobre la montaña sino que tome el camino del valle
if (energia > 50) {
    console.log("Avanzamos sobre la montaña.");
} else {
    console.log("Tomamos el camino del valle.");
}