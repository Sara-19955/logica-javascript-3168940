
document.addEventListener("DOMContentLoaded", () => {
  const btnEnviar = document.getElementById("btnEnviar");
  const btnCerrar = document.getElementById("btnCerrar");

  btnEnviar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const color = document.getElementById("color").value;
    const equipo = document.querySelector('input[name="equipo"]:checked');

    if (!nombre || !color || !equipo) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Cambiar color de fondo
    document.body.style.backgroundColor = color;

    // Mostrar saludo personalizado
    document.getElementById("saludo").innerText = `Hola, ${nombre}!`;

    // Mostrar grupo
    document.getElementById("grupo").innerText = `Estás en el grupo de los ${equipo.value}.`;

    // Mostrar imagen del equipo
    const imagen = document.getElementById("imagenEquipo");
    if (equipo.value === "Gatos") {
      imagen.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.miau.com.mx%2Fabc-del-gato%2F&psig=AOvVaw3e8jlD_1JHsq7EHqh9FOx0&ust=1757644569145000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLDsoLXWz48DFQAAAAAdAAAAABAL";
    } else if (equipo.value === "Mapaches") {
      imagen.src = "https://upload.wikimedia.org/wikipedia/commons/3/3e/Raccoon_in_Central_Park_%2835264%29.jpg";
    } else if (equipo.value === "Perros") {
      imagen.src = "https://miro.medium.com/1*pwgFvrMy1u8j6jWm_HNuqQ.jpeg";
    }

    // Cambiar de pantalla
    document.getElementById("formulario").style.display = "none";
    document.getElementById("pantallaUsuario").style.display = "block";
  });

  btnCerrar.addEventListener("click", () => {
    // Resetear fondo
    document.body.style.backgroundColor = "white";

    // Volver al formulario
    document.getElementById("formulario").style.display = "block";
    document.getElementById("pantallaUsuario").style.display = "none";

    // Limpiar campos
    document.getElementById("customForm").reset();
  });
});

