console.log("---Ejercicio de Clase 02---");
/*
var color = 'Amarillo';
color = "blue";
console.log(color);


//let

let nombre = "Carlos";
nombre = "Pedro";   

let nombre = "Luis"; //incorrecto
console.log(nombre);


let fruta
fruta = "piña";
console.log(typeof fruta);


const color = 'blanco';
color = 'verde'; //error
console.log(color);

*/


//operadores matematicos

//operador +

/*

let shots = 2

console.log( 6 + 4 + 23 );
console.log("Tus shots son: " , shots); // 33

let msj = "Tus shots son: " + shots;

alert(msj);

let num1 = Number( prompt("Dame un número 1") );
let num2 = Number( prompt("Dame un número 2") );
console.log( num1 + num2 );

console.log("5" / 2) // 2.5

*/

//console.log(4 * "cinco")// NAN: Not a Number

/*
let shots = 3;
shots++;
shots++;
shots++;
shots += 3;
shots --
shots--;

console.log(shots)
*/

//Operadores de compaación 

// == : evalúa solo valor
// === : evalúa tanto valor como tipo de dato (recomendable)

//console.log(3 !== "3")

/* 
let numerouno = prompt( "pon un numero" )
let numerodos = 6

console.log(numerouno === numerodos) 
*/

//Para entrar a VIP debes llamarte mario y tener más de 18 años
/* let edad = 10
let nombre = 'MaRiO'.toLowerCase()
 */
//.toLowerCase() : Transforma cadena de caractéres en minúscula
//.toUpperCase() : Transforma cadena de caractéres en mayúscula

//console.log( edad >= 18 || nombre === "mario")



//Condicional if

let color = prompt("dime un color").toLowerCase();

if( color === "azul" ){
    console.log("Adivinaste el color! 😊");
}else if(color === "rojo"){
    console.log("Te ganaste una fresa");
}else if(color === "amarillo"){
    console.log("Te ganaste una piña");
}else{
    console.log("Perdiste :(");
}
