/** --Evaluador de notas con mensajes personalizados--
    Crea un programa en JavaScript que evalúe la nota de un
    estudiante y genere un mensaje personalizado basado en la 
    nota. Las notas se asignan de la siguiente manera:

- Si la nota es 90 o más, el estudiante aprueba con "Excelente".
- Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
- Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
- Si la nota es menor de 60, el estudiante no aprueba.
 */

function evaluador(grade){
    let message = "";

    if(grade >= 0 && grade <= 100){

        if (grade >= 90){
            message = "Excelente";
        } else if(grade >= 75 && grade < 90){
            message = "Bien";
        } else if(grade >= 60 && grade < 75){
            message = "Suficiente";
        } else {
            message = "No aprueba";
        }

    }else if(typeof grade !== "number"){
        message = "Nota no válida, ingresa nota en número";
    }else{
        message = "Nota fuera de rango";
    }

    return message;
}


console.log("Proyecto 2: Comparaciones y decisiones en JavaScript")
console.log(evaluador(103)); // Nota fuera de rango
console.log(evaluador(-2));
console.log(evaluador("veinte")); // Nota no valida, ingresa una calificacion
console.log(evaluador(45)); // No aprueba
console.log(evaluador(60)); // Suficiente
console.log(evaluador(75)); // Bien
console.log(evaluador(0)); // No aprueba
