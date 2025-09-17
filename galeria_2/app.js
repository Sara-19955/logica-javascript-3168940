
const imagenGrande = document.querySelector(".screen");
const titulo = document.querySelector(".titulo");
const miniaturas = document.querySelectorAll(".miniatura");

miniaturas.forEach(miniatura => {
  miniatura.addEventListener("click", () => {
    imagenGrande.src = miniatura.src;
    titulo.textContent = miniatura.name;
  });
});