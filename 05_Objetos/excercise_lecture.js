/**Sintaxis objeto literal */

const persona = {

    nombre: "Juan",
  
    edad: 30,
  
    ocupacion: "Desarrollador"
  
  };

  /**Constructor Object */
  const coche = new Object();

coche.marca = "Toyota";

coche.modelo = "Corolla";

coche.año = 2020;

/**clases (ES6) */

class Animal {

  constructor(especie, sonido) {

    this.especie = especie;

    this.sonido = sonido;

  }

  hacerSonido() {

    console.log(this.sonido);

  }

}

const perro = new Animal("Perro", "Guau");

//acceso mediante Notacion punto 
console.log(persona.nombre); // "Juan"
// acceso notacion de corchetes
console.log(persona["edad"]); // 30

// Modificacion de propiedades 
persona.edad = 31; // Modificar

persona.email = "juan@example.com"; // Agregar

const calculadora = {
  sumar: function(a, b) {
    return a + b;
  },
  restar: function(a, b) {
    return a - b;
  }
};

console.log(calculadora.sumar(5, 3)); // 8

/**
 * Excercise
 * Crear un objeto "auto" con propiedades como marca, modelo, año,
 *  y un método mostrarInfo que imprima la información del auto.
 */

class Auto {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  mostrarInfo() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
  }
}

// Crear una instancia de Auto
const miAuto = new Auto("Toyota", "Corolla", 2020);
miAuto.mostrarInfo();


/**
 * Excercise
 * Crear un objeto "auto" con propiedades como marca, modelo, año,
 *  y un método mostrarInfo que imprima la información del auto.
 */
class Libro {
  constructor(titulo, autor, añoPublicacion) {
    this.titulo = titulo;
    this.autor = autor;
    this.añoPublicacion = añoPublicacion;
  }

  mostrarDetalles() {
    console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Año de publicación: ${this.añoPublicacion}`);
  }
}

// Crear una instancia de Libro
const miLibro = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
miLibro.mostrarDetalles();