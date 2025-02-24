//tipos-de-dato.js

/*  -Datos primitivos(number, boolean, string), 
    -Tipo especial(null,undefined),
    -Big Int, Symbol
*/

let age = 42; //number
let letter_number = 'veinticinco'; //String
let negativeNumber = -666; // number
let isActive = true ; //boolean
let initialValue = 0; // number
let result = null; // object
let message = ''; //String
let useData = undefined; // undefined
let isUserLoggedIn = false;//undefined
let bigIntValue = 12345678901234567890n; // bigint
let symbolValue = Symbol("user3553653");  // Symbol
let name = "Lisbeth";//String
let value = 3.54;
// typeof in JavaScript to print the data type to the console.
console.log("Proyecto 1 : Tipos de datos en JavaScript");

console.log(`${age} of type ${typeof age}`); //number
console.log(`${letter_number} of type ${typeof letter_number}`); //string
console.log(`${negativeNumber} of type ${typeof negativeNumber}`);
console.log(`${isActive} of type ${typeof isActive}`);//boolean
console.log(`${initialValue} of type ${typeof initialValue}`);//number
console.log(`${result} of type ${typeof result}`);//object
console.log(`${message} of type ${typeof message}`); //String 
console.log(`${useData} of type ${typeof useData}`);//undefined
console.log(`${isUserLoggedIn} of type ${typeof isUserLoggedIn}`);//boolean
console.log(`${bigIntValue} of type ${typeof bigIntValue}`);//bigint
console.log(`${symbolValue.toString()} of type ${typeof symbolValue}`);//symbol
console.log(`${name}of type ${typeof name}`);//string
console.log(`${value} of type ${typeof value}`);//number
