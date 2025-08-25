// ================== 1 ==================
/*
let num = parseInt(prompt("Ingrese un número:"));
alert("El número es: " + num);
if (num >= 0) {
  alert("El número es POSITIVO");
} else {
  alert("El número es NEGATIVO");
}
*/

// ================== 2 ==================
/*
let n1 = parseInt(prompt("Ingrese el primer número:"));
let n2 = parseInt(prompt("Ingrese el segundo número:"));
if (n1 > 0) alert("Primer número positivo: " + n1);
if (n2 > 0) alert("Segundo número positivo: " + n2);
*/

// ================== 3 ==================
/*
let a = parseInt(prompt("Ingrese el primer número:"));
let b = parseInt(prompt("Ingrese el segundo número:"));
if (a === b) {
  alert("Multiplicación: " + (a * b));
} else if (a > b) {
  alert("Resta: " + (a - b));
} else {
  alert("Suma: " + (a + b));
}
*/

// ================== 4 ==================
/*
let costo = parseFloat(prompt("Ingrese el costo del artículo:"));
let pago = parseFloat(prompt("Ingrese el dinero entregado:"));
let cambio = pago - costo;
alert("El cambio es: $" + cambio);
*/

// ================== 5 ==================
/*
let vacunas = parseInt(prompt("Número de vacunas:"));
let costoVac = parseFloat(prompt("Costo de cada vacuna:"));
let costoAplic = parseFloat(prompt("Costo de aplicación:"));
let total = vacunas * (costoVac + costoAplic);
alert("Total gastado en vacunas: $" + total);
*/

// ================== 6 ==================
/*
let camisas = parseInt(prompt("Número de camisas:"));
let precio = parseFloat(prompt("Precio unitario de cada camisa:"));
let totalCompra = camisas * precio;
let descuento = camisas >= 3 ? 0.2 : 0.1;
let totalPagar = totalCompra - (totalCompra * descuento);
alert("Total a pagar: $" + totalPagar);
*/

// ================== 7 ==================
/*
let inicio = parseFloat(prompt("Dinero inicial:"));
let ventas = 4 * 800000;
let caja = inicio + ventas;
let pagoAcreedores = caja * 0.10;
let final = caja - pagoAcreedores;
alert("Dinero inicial: $" + inicio);
alert("Pago acreedores: $" + pagoAcreedores);
alert("Dinero final: $" + final);
*/

// ================== 8 ==================
/*
let suma = 0;
for (let i = 1; i <= 5; i++) {
  let venta = parseFloat(prompt("Ingrese la venta del día " + i));
  suma += venta;
}
let promedio = suma / 5;
alert("El promedio de ventas es: $" + promedio);
*/

// ================== 9 ==================
/*
let op1 = parseFloat(prompt("Ingrese el primer número:"));
let op2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (+, -, *, /):");
let resultado;

if (operacion === "+") resultado = op1 + op2;
else if (operacion === "-") resultado = op1 - op2;
else if (operacion === "*") resultado = op1 * op2;
else if (operacion === "/") resultado = op1 / op2;

alert("Resultado: " + parseInt(resultado));
*/

// ================== 10 ==================
/*
let x = parseInt(prompt("Número 1:"));
let y = parseInt(prompt("Número 2:"));
let z = parseInt(prompt("Número 3:"));
let nums = [x, y, z].sort((a, b) => a - b);
alert("Menor: " + nums[0] + ", Medio: " + nums[1] + ", Mayor: " + nums[2]);
if (x === y || y === z || x === z) alert("Hay números iguales.");
*/

// ================== 11 ==================
/*
let edad = parseInt(prompt("Edad:"));
let estatura = parseFloat(prompt("Estatura (m):"));
let peso = parseFloat(prompt("Peso (kg):"));
if (edad >= 18 && estatura > 1.7 && peso >= 50 && peso <= 90) {
  alert("Seleccionado ✅");
} else {
  alert("No cumple requisitos ❌");
}
*/

// ================== 12 ==================
/*
let sueldo = parseFloat(prompt("Ingrese su sueldo:"));
if (sueldo == 1300000) {  // Ejemplo: SMMLV Colombia 2025
  sueldo = sueldo * 1.1;
}
alert("Sueldo final: $" + sueldo);
*/

// ================== 13 ==================
/*
let datos = [];
for (let i = 0; i < 3; i++) {
  datos[i] = prompt("Ingrese dato " + (i + 1) + ":");
}
alert("Datos guardados: " + datos);
*/

// ================== 14 ==================
/*
let nombre;
while (true) {
  nombre = prompt("Ingrese un nombre (o escriba 'salir' para terminar):");
  if (nombre.toLowerCase() === "salir") break;
  document.write(nombre + "<br>");
}
*/

// ================== 15 (JUEGO) ==================
/*
while (true) {
  let num1 = Math.floor(Math.random() * 10); // 1 dígito
  let num2 = Math.floor(Math.random() * 1000); // hasta 3 dígitos
  let respuesta = parseInt(prompt(¿Cuánto es ${num1} x ${num2}?));
  if (respuesta === num1 * num2) {
    alert("¡Ganaste! 🎉");
    break;
  } else {
    alert("Incorrecto, intenta de nuevo.");
  }
}
*/