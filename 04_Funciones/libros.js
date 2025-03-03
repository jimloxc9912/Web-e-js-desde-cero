/**
 * Problema: Seguimiento de Libros
 * Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.
 * 
 */

let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`Libro "${titulo}" agregado a la lista de libros leídos.`);
}

function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("Libros que has leído:");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    }
}

// Agregar algunos libros
agregarLibro("El Principito");
agregarLibro("Cien años de soledad");
agregarLibro("1984");

// Mostrar los libros leídos
mostrarLibrosLeidos();