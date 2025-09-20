document.addEventListener("DOMContentLoaded", function () {
  const catalogo = document.getElementById("catalogo");

  const inmuebles = [
    {
      id: 1,
      ciudad: "Barranco",
      nombre: "The Muse",
      categoria: "Apartamento",
      precio_actual: 380124,
      area: "40m²",
      habitaciones: 3,
      baños: 2,
      parqueaderos: 1,
      imagen: "imagenes/01.jpg",
    },
    {
      id: 2,
      ciudad: "Lince",
      nombre: "Bloom",
      categoria: "Departamento",
      precio_actual: 323743,
      area: "36m²",
      habitaciones: 2,
      baños: 2,
      parqueaderos: 0,
      imagen: "imagenes/02.jpg",
    },
    {
      id: 3,
      ciudad: "San Isidro",
      nombre: "Ascent",
      categoria: "Apartamento",
      precio_actual: 565040,
      area: "60m²",
      habitaciones: 2,
      baños: 2,
      parqueaderos: 1,
      imagen: "imagenes/03.jpg",
    },
    {
      id: 4,
      ciudad: "Barranco",
      nombre: "Grau",
      categoria: "Departamento",
      precio_actual: 330988,
      area: "40m²",
      habitaciones: 2,
      baños: 2,
      parqueaderos: 1,
      imagen: "imagenes/04.jpg",
    },
    {
      id: 4,
      ciudad: "Barranco",
      nombre: "Grau",
      categoria: "Departamento",
      precio_actual: 330988,
      area: "40m²",
      habitaciones: 2,
      baños: 2,
      parqueaderos: 1,
      imagen: "imagenes/04.jpg",
    },
    {
      id: 5,
      ciudad: "Miraflores",
      nombre: "Acacias",
      categoria: "Departamento",
      precio_actual: 630270,
      area: "63m²",
      habitaciones: 2,
      baños: 2,
      parqueaderos: 1,
      imagen: "imagenes/05.jpg",
    },
  ];

  inmuebles.forEach((inmueble) => {
    const divCasa = document.createElement("div");
    divCasa.classList.add("casa");

    divCasa.innerHTML = `
      <img src="${inmueble.imagen}" alt="${inmueble.nombre}">
      <h3>${inmueble.nombre}</h3>
      <p><strong>${inmueble.ciudad}</strong></p>
      <p>${inmueble.categoria}</p>
      <p>Precio Actual: $${inmueble.precio_actual.toLocaleString()}</p>
      <p>Área: ${inmueble.area}</p>
      <p>${inmueble.habitaciones} Habitaciones</p>
      <p>${inmueble.baños} Baños</p>
      <p>${inmueble.parqueaderos} Parqueaderos</p>
    `;

    catalogo.appendChild(divCasa);
  });
});
