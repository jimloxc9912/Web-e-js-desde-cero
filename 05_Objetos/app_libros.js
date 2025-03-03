// Definir un array de libros
const libros = [
    {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      anio: 1967,
      estado: "disponible",
      capitulos: [
        "Capítulo 1: La fundación de Macondo",
        "Capítulo 2: La llegada de los gitanos",
      ],
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      anio: 1949,
      estado: "prestado",
      capitulos: [
        "Capítulo 1: El mundo de Oceanía",
        "Capítulo 2: El Gran Hermano",
      ],
    },
    {
      titulo: "El Principito",
      autor: "Antoine de Saint-Exupéry",
      anio: 1943,
      estado: "disponible",
      capitulos: [
        "Capítulo 1: El aviador y el principito",
        "Capítulo 2: El planeta del principito",
      ],
    },
    {
      titulo: "Don Quijote de la Mancha",
      autor: "Miguel de Cervantes",
      anio: 1605,
      estado: "disponible",
      capitulos: [
        "Capítulo 1: El ingenioso hidalgo",
        "Capítulo 2: La primera salida",
      ],
    },
    {
      titulo: "Orgullo y prejuicio",
      autor: "Jane Austen",
      anio: 1813,
      estado: "prestado",
      capitulos: [
        "Capítulo 1: La familia Bennet",
        "Capítulo 2: La llegada del señor Bingley",
      ],
    },
    {
      titulo: "Crónica de una muerte anunciada",
      autor: "Gabriel García Márquez",
      anio: 1981,
      estado: "disponible",
      capitulos: [
        "Capítulo 1: El día de la muerte",
        "Capítulo 2: Los hermanos Vicario",
      ],
    },
  ];
  
  // Función para actualizar la lista de capítulos en la página
  function actualizarCapitulos() {
    libros.forEach((libro) => {
      const libroContainer = document.getElementById(`libro-${libro.titulo}`);
      if (libroContainer) {
        const capitulosList = libroContainer.querySelector(".capitulos-list");
        capitulosList.innerHTML = libro.capitulos
          .map(
            (capitulo) =>
              `<li>${capitulo} <button onclick="eliminarCapitulo('${libro.titulo}', '${capitulo}')">Eliminar</button></li>`
          )
          .join("");
      }
    });
  }
  
  // Función para agregar un capítulo
  function agregarCapitulo(tituloLibro) {
    const input = document.getElementById(`input-${tituloLibro}`);
    const capitulo = input.value.trim();
    if (capitulo) {
      const libro = libros.find((libro) => libro.titulo === tituloLibro);
      if (libro) {
        libro.capitulos.push(capitulo);
        input.value = ""; // Limpiar el input
        actualizarCapitulos(); // Actualizamos los capítulos después de agregar uno
      }
    }
  }
  
  // Función para eliminar un capítulo
  function eliminarCapitulo(tituloLibro, capitulo) {
    const libro = libros.find((libro) => libro.titulo === tituloLibro);
    if (libro) {
      const index = libro.capitulos.indexOf(capitulo);
      if (index !== -1) {
        libro.capitulos.splice(index, 1);
        actualizarCapitulos(); // Actualizamos los capítulos después de eliminar uno
      }
    }
  }
  
  // Mostrar la información de todos los libros en la página
  const libroInfo = document.getElementById("libro-info");
  
  libros.forEach((libro) => {
    // Crear un contenedor para cada libro
    const libroContainer = document.createElement("div");
    libroContainer.classList.add("libro-container");
    libroContainer.id = `libro-${libro.titulo}`;
  
    // Mostrar la información básica del libro
    libroContainer.innerHTML = `
      <p>Libro titulado <strong>${libro.titulo}</strong>, escrito por <strong>${libro.autor}</strong> en el año <strong>${libro.anio}</strong>. El estado es: <strong>${libro.estado}</strong>.</p>
      <h2>Capítulos del libro:</h2>
      <ul class="capitulos-list">
        ${libro.capitulos
          .map(
            (capitulo) =>
              `<li>${capitulo} <button onclick="eliminarCapitulo('${libro.titulo}', '${capitulo}')">Eliminar</button></li>`
          )
          .join("")}
      </ul>
      <div>
        <input type="text" id="input-${libro.titulo}" placeholder="Agregar capítulo">
        <button onclick="agregarCapitulo('${libro.titulo}')">Agregar</button>
      </div>
    `;
  
    // Agregar el contenedor del libro al DOM
    libroInfo.appendChild(libroContainer);
  });
  