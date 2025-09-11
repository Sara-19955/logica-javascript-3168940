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

    // Fondos degradados según el color
    let fondo = "white";
    if (color === "red") {
      fondo = "linear-gradient(135deg, #ff7e7e, #ff3c3c)";
    } else if (color === "green") {
      fondo = "linear-gradient(135deg, #8fd694, #4caf50)";
    } else if (color === "blue") {
      fondo = "linear-gradient(135deg, #7ebeff, #3c8dff)";
    }
    document.body.style.background = fondo;

    // Mostrar saludo personalizado
    document.getElementById("saludo").innerText = `Hola, ${nombre}!`;

    // Mostrar grupo
    const grupoTexto = `Estás en el grupo de los ${equipo.value}.`;
    document.getElementById("grupo").innerText = grupoTexto;

    // Mostrar imagen del equipo
    const imagen = document.getElementById("imagenEquipo");
    if (equipo.value === "Gatos") {
      imagen.src = "https://www.miau.com.mx/wp-content/uploads/2014/09/gatito.jpg";
    } else if (equipo.value === "Mapaches") {
      imagen.src = "https://upload.wikimedia.org/wikipedia/commons/3/3e/Raccoon_in_Central_Park_%2835264%29.jpg";
    } else if (equipo.value === "Perros") {
      imagen.src = "https://miro.medium.com/1*pwgFvrMy1u8j6jWm_HNuqQ.jpeg";
    }

    // Mostrar datos en consola
    console.log("=== Datos del usuario ===");
    console.log("Nombre:", nombre);
    console.log("Color:", color);
    console.log("Equipo:", equipo.value);

    // Cambiar de pantalla
    document.getElementById("formulario").style.display = "none";
    document.getElementById("pantallaUsuario").style.display = "block";
  });

  btnCerrar.addEventListener("click", () => {
    // Resetear fondo
    document.body.style.background = "white";

    // Volver al formulario
    document.getElementById("formulario").style.display = "block";
    document.getElementById("pantallaUsuario").style.display = "none";

    // Limpiar campos
    document.getElementById("customForm").reset();

    console.log("Sesión cerrada. Formulario reiniciado.");
  });
});

