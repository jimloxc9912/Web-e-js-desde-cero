/**
 * Instrucciones para resolver el problema:
    1. Declara un arreglo llamado frutas con varios tipos de frutas.
    2. Crea un objeto para almacenar la cantidad de cada tipo de fruta.
    3. Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
    4. Imprime en la consola la cantidad de cada tipo de fruta.
    5. Opcional: intenta implementar la solución con el otro ciclo también (for/while).
 * 
 */
//Function that iterates through the array and counts the fruits.
// For
function counterFruit(fruits){
    const fruitCount = {};
    for(i = 0;i < fruits.length;i++){
        let fruit = fruits[i];
        if(fruitCount[fruit]){ //si existe
            fruitCount[fruit]++; //incrementa
        }else{
            fruitCount[fruit] = 1;
        }
    }
    return fruitCount;
}

function counterFruitW(fruits){
    const fruitCount = {};
    let i = 0;
    while (i < fruits.length){
        let fruit = fruits[i];
        if(fruitCount[fruit]){ //si existe
            fruitCount[fruit]++; //incrementa
        }else{
            fruitCount[fruit] = 1;
        }
        i++;
    }
    return fruitCount;
}

//Function to print the fruits and their quantities.
function printFruits(fruits){
    let sortedFruits = Object.keys(fruits).sort();
    for (let fruit of sortedFruits) {
        console.log(`${fruit}: ${fruits[fruit]}`);
    }
}

let fruits = ["fresa", "plátano", "mango", "guayaba", "manzana",
    "piña", "naranja", "uva", "pera", "fresa", "plátano", "mango", 
    "guayaba", "manzana", "piña", "naranja", "uva", "pera", "fresa", 
    "plátano", "mango", "guayaba", "manzana", "piña", "naranja", 
    "uva", "pera", "fresa", "plátano", "mango"];

//For Loop
console.log("-------Foor Loop--------");
printFruits(counterFruit(fruits));
//while
console.log("-----While loop-----");
printFruits(counterFruitW(fruits));