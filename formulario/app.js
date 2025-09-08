// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  const btnEnviar = document.getElementById("btnEnviar");

  btnEnviar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const color = document.getElementById("color").value;
    const equipo = document.querySelector('input[name="equipo"]:checked');

    if (!nombre || !color || !equipo) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Mostrar en alerta (popup)
    alert(`Nombre: ${nombre}\nColor: ${color}\nEquipo: ${equipo.value}`);

    // También mostramos en el HTML
    document.getElementById("resultado").innerText =
      `Nombre: ${nombre} | Color: ${color} | Equipo: ${equipo.value}`;
  });
});
