# Módulo 3 JavaScript desde cero

¡Bienvenido a **Web-e-js-desde-cero**! Este proyecto está diseñado para documentar y practicar los fundamentos de JavaScript desde cero. Aquí encontrarás apuntes teóricos, ejercicios prácticos y dinámicos, así como ejercicios guiados que se ejecutarán en cada entregable y dentro de cada clase. 

### ¿Qué es JavaScript?
JavaScript es un **lenguaje de programación interpretado, dinámico y de scripting** generalmente utilizado en sitios web para ejcutar acciones del lado del cliente algunas acciones ejecutadas son:

- Interactividad en la página web en tiempo real.
- Contenido dinamico.
- Validación de formularios.
- Animaciones y transacciones.
- Manejo de operaciones asíncronas.


## Estructura del proyecto 
<details>
 <summary>Clase 1: Tipos de datos</summary>

   **Objetivos**
  * Comprender los diferentes tipos de datos en JavaScript.
  * Aprender a declarar variables y asignar valores.
  * Saber identificar el tipo de dato de una variable.

  **Tipos de datos (Primitivos)**
  * **String** : Caracteres dentro de comillas dobles y simples (texto).
  * **Number** : Sin distincion entre enteros y decimales.
  * **Boolean** : Verdadero o falso, usado para evaluar condiciones.
  * **Undefined** : Valor asignado automaticamente cuando no tiene valor (ejemplo : Declaración de una variable sin asignar).
  * **Null** : Valor que indica que no hay información disponible.
  * **Symbol** : Único y no se puede repetir.
  * **BigInt** : Números enteros de gran longitud.
  * **Object** : Conjunto de propiedades y valores.

[**-Proyecto Introducción a JavaScript**](https://github.com/jimloxc9912/Web-e-js-desde-cero/blob/main/01_Fundamentos%20js/tipos-de-dato.js)

[**-Ejercicios de Clase 01**](https://github.com/jimloxc9912/Web-e-js-desde-cero/blob/main/02_Condicionales/clase02_ejercicios.js)


</details>

<details>
 <summary>Clase 2: Comparaciones y decisiones</summary>

   **Objetivos**
  * Conocer las herramientas llamadas operadores de comparación y operadores lógicos.
  * Aprender el funcionamiento de estos operadores y cuando usarlos.
  * Saber identificar el tipo de dato de una variable.

  **Operadores de comparación**
  <br> Permiten comparar dos valores y devolver un resultado true (verdadero) o false (falso)
  * **Igualdad débil (==)** : compara dos valores,convierte los tipos de dato. 
  * **Igualdad Estricta (===)** : compara los valores y también los tipos de dato.
  * **Diferencia Débil (!=)** : Compara dos valores y devuelve true si son diferentes, sin importar el tipo de dato.
  * **Diferencia Estricta (!==)** : Compara los valores y tipos de datos. 
    Devuelve true si son diferentes en valor o tipo.
  * **Mayor que (>) y Menor que (<)** : Compara si un valor es mayor o menor que otro.
  * **Mayor o igual que (>=) y Menor o igual que (<=)** : Compara si un valor es mayor o igual, 
    o menor o igual que otro.

  **Operadores de Lógicos**

  <br> Permiten combinar varias condiciones. 
  * **AND (&&)** : Devuelve true solo si ambas condiciones son verdaderas. 
    Si alguna es falsa, devuelve false.
  * **OR (||)** : Devuelve true si al menos una de las condiciones es verdadera. 
    Solo devuelve false si todas son falsas.
  * **NOT (!)** : Invierte el valor de una condición. 

   **Estructura de control if**

   <br> "Si una condición es verdadera, haz esto. Si no, haz otra cosa."
   **if** :  Se utiliza para comparar si una condición es verdadera.
   **else if** : Evaluar otra condición si la condición del if anterior es falsa. Puedes tener tantos else if como necesites.
   **else** : Se utiliza si ninguna de las condiciones anteriores es verdadera

[**-Proyecto 02- Evaluador de Notas con Mensajes Personalizados**](https://github.com/jimloxc9912/Web-e-js-desde-cero/blob/main/02_Condicionales/app_notas.js)

[**-Ejercicios de Clase 02**](https://github.com/jimloxc9912/Web-e-js-desde-cero/blob/main/02_Condicionales/clase02_ejercicios.js)
</details>

<details>
 <summary>Clase 3: Arreglos y Ciclos en JavaScript</summary>

   **Objetivos**
  * Conocer los diferentes ciclos en JavaScript.
  * Aprender el funcionamiento de ciclos y cuando usarlos.
  * Practicar el uso de Arrays.

  **ciclos**
  <br> Estructura de control que permite ejecutar un bloque de código repetidamente.
  * **While** : Se repite mientras una condición específica sea verdadera.Es útil cuando no sabemos cuántas veces necesitaremos repetir un proceso. 
  * **For** :  Permite repetir un bloque de código un número específico de veces.

  **Arrays**
  <br> Es una estructura de datos que permite almacenar múltiples valores en una sola variable.
  **Características**
  * Índices.
  * Tipode datos.
  * Acceso a elementos mediante su indice [inicio en 0].
  * Manipulación de arreglos a tráves de métodos push(), unshift(), pop(),
  shift().
  * **length** : Propiedad que devuelve el número de elementos en el arreglo.


[**-Proyecto 03- Evaluador de Notas con Mensajes Personalizados**](https://github.com/jimloxc9912/Web-e-js-desde-cero/blob/main/03_Ciclos_y_arreglos/app_clasifier.js)

[**-Ejercicios de Clase 03**](https://github.com/jimloxc9912/Web-e-js-desde-cero/blob/main/03_Ciclos_y_arreglos/exercise_class.js)
</details>
