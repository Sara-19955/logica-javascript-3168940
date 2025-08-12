//Array
let frutas = ["mango","piña","papaya","uva","limón","aguacate"]
let jugadores = [
  {
    id: 1,
    nombre: "diaz", 
    pais: "col"
  },
    "james",
    "messi"
]
console.log( jugadores[0].nombre ) //Imprimir nombre "diaz"

//Objeto
let pelicula = {
  nombre: "Back to the future",
  estreno: 1986,
  director:  "Robert Zemeckis",
  calificacion: "8.5"
}

console.log( pelicula.director )


// Ejercicio 1: While - pedir un número
function ejercicio1() {
  let numero;
  while (isNaN(numero)) {
    numero = parseInt(prompt("Ingresa un número:"));
  }
  console.log("Número ingresado:", numero);
}

// Ejercicio 2: Mostrar múltiplos de 5 desde 1 hasta el número ingresado
function ejercicio2() {
  let numero = parseInt(prompt("Ingresa un número:"));
  let i = 1;
  while (i <= numero) {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  }
}

// Ejercicio 3: Igual que el anterior, pero usando Do While
function ejercicio3() {
  let numero = parseInt(prompt("Ingresa un número:"));
  let i = 1;
  do {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  } while (i <= numero);
}

// Ejercicio 4: Imprimir los números impares del 1 al número ingresado
function ejercicio4() {
  let numero = parseInt(prompt("Ingresa un número:"));
  for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// Ejercicio 5: Imprimir números del 1 al 100 excluyendo un rango de 10 números
function ejercicio5() {
  let inicio = parseInt(prompt("Ingresa el inicio del rango a excluir (entre 1 y 90):"));
  let fin = inicio + 9;
  for (let i = 1; i <= 100; i++) {
    if (i < inicio || i > fin) {
      console.log(i);
    }
  }
}
  

//Cree un ciclo for que imprima la tabla de multiplicar del 7

for(let i = 1; i <=10; i++){
console.log ('x 7 ${i}= {7* i}');



}