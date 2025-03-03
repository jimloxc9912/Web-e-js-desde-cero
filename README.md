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

  **Ciclos**
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

[**-Ejercicios de lecturas 3**](https://github.com/jimloxc9912/Web-e-js-desde-cero/blob/main/03_Ciclos_y_arreglos/exercise_lectures.js)
</details>


<details>
 <summary>Clase 4: Funciones</summary>

   **Objetivos**
  * Comprender qué es una función y su importancia en la programación.
  * Aplicar funciones en situaciones prácticas.
  * Desarrollar habilidades para escribir código modular y reutilizable.

  **Functions**
  <br> Ejecutan una tareas específicas y pueden recibir datos, realizar operaciones sobre ellos y devolver un resultado.
  **Importancia de uso**
  * **Modularidad** : Permiten dividir ell código. 
  * **Reutilización** :  Puedes llamar una función cunatas veces desees.Evitas código repetitivo.
  * **Mantenimiento** : Reduce riegos. 

  **Algunas funciones**
  * **Anónimas** : Funciones sin un nombre. 
  * **Flecha (Arrow functions)** :  Puedes llamar una función cunatas veces desees.Evitas código repetitivo.
  * **Mantenimiento** : Reduce riegos. 

[**-Proyecto 04- Funciones en Javascript**](https://github.com/jimloxc9912/Web-e-js-desde-cero/blob/main/03_Ciclos_y_arreglos/app_clasifier.js)

[**-Ejercicios de Clase 04**](https://github.com/jimloxc9912/Web-e-js-desde-cero/blob/main/03_Ciclos_y_arreglos/exercise_class.js)

[**-Ejercicios de lecturas 4**](https://github.com/jimloxc9912/Web-e-js-desde-cero/blob/main/03_Ciclos_y_arreglos/exercise_lectures.js)
</details>


<details>
 <summary>Clase 5: Objetos</summary>

   **Objetivos**
  * Entender la estructura básica de un objeto y cómo crear uno.
  * Aprender a acceder y manipular propiedades y métodos de un objeto.
  * Aplicar objetos para modelar datos del mundo real.

  **Object**
  <br> los objetos agrupan información relacionada.Permite a los desarrolladores modelar datos del mundo real de manera más efectiva.
  **Creación de objetos**
  * Sintaxis de objeto literal.
  * Constructor Object.
  * clases (ES6).

  **Acceso a propiedades**
  * Notación de punto.
  * Notación de corchetes



[**-Proyecto 05- Proyecto Objetos en JavaScript**](https://github.com/jimloxc9912/Web-e-js-desde-cero/blob/main/05_Objetos/app_libros.js)

[**-Ejercicios de Clase 05**](https://github.com/jimloxc9912/Web-e-js-desde-cero/blob/main/05_Objetos/excersise_class.js)

[**-Ejercicios de lecturas 05**](https://github.com/jimloxc9912/Web-e-js-desde-cero/blob/main/05_Objetos/excercise_lecture.js)
</details>


<details>
 <summary>Clase 6: Introduccion al Dom</summary>

  **Objetivos**
  * Comprender la estructura y función del DOM
  * Aprender a seleccionar y manipular elementos del DOM con JavaScript
  * Implementar interactividad con eventos usando addEventListener

  **DOM**
  <br> DOM es una representación estructurada de todo el contenido de una página HTML, que convierte los elementos de una página (como etiquetas, atributos y texto) en objetos que podemos manipular con código

  **seleccion de elementos**
  * document.getElementById(): Selecciona un elemento por su ID.
  * document.getElementsByClassName(): Selecciona todos los elementos que tengan una clase específica.
  * document.getElementsByTagName(): Selecciona todos los elementos de un tipo específico.
  * document.querySelector(): Selecciona el primer elemento que coincide con un selector CSS.
  * document.querySelectorAll(): Selecciona todos los elementos que coinciden con un selector CSS.

  **Manipulación de elementos**
  * Cambiar el contenido de un elemento.
  * Cambiar los atributos de un elemento.
  * Cambiar el estilo de un elemento.
  * Crear nuevos elementos.
  * Eliminar elementos.

[**-Proyecto 06- Intro al DOM**](https://github.com/jimloxc9912/Web-e-js-desde-cero/tree/main/06_Intro_DOM)

</details>

<details>
 <summary>Clase 7:Dominando el DOM</summary>
  
  **Acceso y modificación de Contenido del DOM**
   
  * Acceder al Nombre de la Etiqueta: nodeName
  * Modificar Contenido de Texto con .textContent
  * Acceso al Texto Renderizado con .innerText
  * Reemplazo del Elemento con .outerText
  * Insertar Contenido HTML innerHTML

  **Acceder a clases CSS classList**

  * Añadir clases css .classList.add()
  * eliminar clases CSS .classList.remove().
  * Comprobar si existen clases CSS .classList.contains()
  * Alternar clases CSS .classList.toggle()
  * Reemplazar una clase CSS .classList.replace()


[**-Generador de Passwords**](https://github.com/jimloxc9912/Web-e-js-desde-cero/tree/main/07_DOM)

</details>

<details>

 <summary>Clase 8:Proyecto final</summary>
  
  **El LocalStorage Tema Bonus**
   <br> El localStorage es una API de almacenamiento en el navegador que permite guardar pares clave-valor de forma persistente. Los datos se mantienen incluso después de cerrar el navegador, haciéndolo ideal para conservar configuraciones, carritos de compras y más.

  **Métodos Comunes**

  * Guardar Datos: setItem(key, value)
  * Recuperar Datos: getItem(key)
  * Eliminar Datos Específicos: removeItem(key)
  * Eliminar Todos los Datos: clear()
  * Obtener Clave por Índice: key(index)


[**-Generador de Passwords**](https://github.com/jimloxc9912/Web-e-js-desde-cero/tree/main/08_Proyecto_final)

</details>