/*Example 1
    Contar del 0 al 4
*/
console.log("Contador del 0 al 4");
let contador = 0;

while (contador < 5){
    console.log(contador);
    contador++;
}


/** Ejercicio práctico 1
 * Intenta practicar el uso de este ciclo con los siguientes ejercicios:
 * Crea un ciclo while que cuente del 10 al 1 y lo imprima en la consola.
 * Modifica el ciclo para que imprima solo los números pares.
 */
console.log("Números pares del 10 al 1");

let contador2 = 10;
while (contador2 > 0){
    if(contador2 % 2 === 0){
        console.log(contador2);
    }
    contador2--;
}

/**Example 2
 * Imprime los números del 0 al 9:
 */
console.log("Contador del 0 al 9");
for (let i = 0; i < 10; i++) {

    console.log(i);

}
/**Example 3: Sumar números en un rango
Supongamos que queremos calcular la suma de los números del 1 al 10. */

let suma = 0;

for (let i = 1; i <= 10; i++) {
    suma += i; // Sumar el número actual a la suma total

}
console.log("Sumador ciclo for");
console.log(suma);

/**
 * Excersice 2
 * Contador Inverso: Crea un programa que cuente del 10 al 1 y lo imprima en la consola.
 * 
 */
console.log("Contador Inverso")
for(i = 10; i >= 0; i--){
    console.log(i);
}

/**
 * Exercise 3
 * Suma de Pares: Modifica el ciclo para que solo sume los 
 * números pares del 1 al 20 y muestre el resultado.
 */

console.log("Suma de pares del 1 al 20 ");
let sumaPares = 0;
for(i = 0; i <= 20; i++){

    if(i % 2 === 0){
        sumaPares += i;
    }
}
console.log(sumaPares);

// Array de frutas 

let frutas = ['manzana', 'plátano', 'naranja']; 

// Array de números 

let numeros = [1, 2, 3, 4, 5]; 

// Array vacío 

let vacio = [];


//--------Modificación de Arrays------------

frutas[1] = 'pera'; 

// Ahora el array es ['manzana', 'pera', 'plátano', 'kiwi']

//--------Añadir Elementos ---------------------
frutas.push('kiwi');

console.log(frutas); 

// Imprime: ['manzana', 'pera', 'naranja', 'kiwi']

//--------Añadir Elementos al inicios---------------------

frutas.unshift('cereza');

console.log(frutas); 

// Imprime: ['cereza', 'manzana', 'pera', 'naranja', 'kiwi']


//--------Eliminar elementos al final ---------
frutas.pop();

console.log(frutas); 

// Imprime: ['cereza', 'manzana', 'pera', 'naranja']

//--------Eliminar elementos al inicio ---------

frutas.shift();
console.log(frutas); 
// Imprime: ['manzana', 'pera', 'naranja']

/**exercise 1
 * 1. Crear un Array: Crea un array llamado colores con al menos cuatro colores diferentes.
 * 2. Imprimir el Segundo Color: Imprime el segundo color del array.
 * 3. Modificar el Tercer Color: Cambia el tercer color a otro color de tu elección.
 * 4. Añadir un Nuevo Color: Añade un nuevo color al final del array.
 * 5. Eliminar el Primer Color: Elimina el primer color del array y muestra el resultado.
 */

console.log("Ejercicio práctico");
let colores = ['rojo','verde','azul','amarillo'];
console.log(colores[1]);
colores[2] = 'morado';
colores.push('rosa');
colores.shift();
console.log(colores);