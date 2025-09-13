// Ejercicio 1
document.getElementById("mensaje").textContent = "Hola, este texto fue modificado con JavaScript.";

// Ejercicio 2
document.getElementById("btnColor").addEventListener("click", function() {
  document.body.style.backgroundColor = "blue";
});

// Ejercicio 3
document.getElementById("btnToggle").addEventListener("click", function() {
  let p = document.getElementById("parrafoToggle");
  if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
});

// Ejercicio 4
document.getElementById("btnMostrar").addEventListener("click", function() {
  let texto = document.getElementById("textoInput").value;
  document.getElementById("resultado").textContent = texto;
});

// Ejercicio 5
document.getElementById("btnRojo").addEventListener("click", function() {
  document.body.style.backgroundColor = "red";
});
document.getElementById("btnVerde").addEventListener("click", function() {
  document.body.style.backgroundColor = "green";
});
document.getElementById("btnAmarillo").addEventListener("click", function() {
  document.body.style.backgroundColor = "yellow";
});

// Ejercicio 6
document.getElementById("miFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita recargar la página
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  document.getElementById("saludo").textContent = "Hola " + nombre + ", tienes " + edad + " años.";
});

// Ejercicio 7
// 3 formas de obtener el mismo elemento
let titulo1 = document.getElementById("titulo");
let titulo2 = document.querySelector("#titulo");
let titulo3 = document.getElementsByTagName("h2")[0];

console.log("Con getElementById:", titulo1.textContent);
console.log("Con querySelector:", titulo2.textContent);
console.log("Con getElementsByTagName:", titulo3.textContent);

// Ejercicio 8
document.getElementById("btnClase").addEventListener("click", function() {
  let p = document.getElementById("textoClase");
  p.classList.toggle("resaltado");
});
