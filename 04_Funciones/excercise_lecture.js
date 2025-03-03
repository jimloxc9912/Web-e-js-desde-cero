// ------Example saludar por nombre -----

function saludar(nombre) {

    console.log("Hola, " + nombre + "!");

}

saludar("Lisbeth"); // Imprime: Hola, lis!

// ----- Example variables locales y globales -----

let x = 10; // Variable global

function mostrarX() {

    let y = 5; // Variable local

    console.log("X es: " + x); // Accede a la variable global

    console.log("Y es: " + y); // Accede a la variable local

}

mostrarX();

//console.log(y); // Error: y is not defined

//----- Funciones anónimas -----

const saludar2 = function(nombre) {

    console.log("Hola, " + nombre + "!");

};

saludar2("María");

//-----Funciones de flecha

const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 5));

/**Excercise Caulculadora simple
 * Crea una calculadora simple que permita realizar operaciones matemáticas básicas:
 * suma, resta, multiplicación y división.
*/
function sumar(a, b) {

    return a + b;

}

function restar(a, b) {

    return a - b;

}

function multiplicar2(a, b) {

    return a * b;

}

function dividir(a, b) {

    if (b === 0) {

        return "Error: División por cero";

    }

    return a / b;

}

// Llamadas a las funciones

console.log("Suma: " + sumar(5, 3));

console.log("Resta: " + restar(5, 3));

console.log("Multiplicación: " + multiplicar2(5, 3));

console.log("División: " + dividir(5, 0));

/**Excercise 2 Conversor de Temperaturas
 * Descripción: Crea una función que convierta temperaturas entre grados Celsius y Fahrenheit.
Requisitos:
Define dos funciones: celsiusAFahrenheit y fahrenheitACelsius.
celsiusAFahrenheit debe tomar una temperatura en Celsius y devolver la temperatura equivalente en Fahrenheit.
fahrenheitACelsius debe tomar una temperatura en Fahrenheit y devolver la temperatura equivalente en Celsius.
En el programa principal, llama a ambas funciones con ejemplos de temperaturas y muestra los resultados en la consola.
 * 
 */
function celsiusAFahrenheit(celsius) {

    return (celsius * 9/5) + 32;

}

function fahrenheitACelsius(fahrenheit) {

    return (fahrenheit - 32) * 5/9;

}

// Llamadas a las funciones

console.log("20°C en Fahrenheit es: " + celsiusAFahrenheit(20));

console.log("68°F en Celsius es: " + fahrenheitACelsius(68));