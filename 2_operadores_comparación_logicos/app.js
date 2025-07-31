 //Boolean(...)

console.log('"5==5"', "5" == "5")//true
console.log('"5===5"', "5" === "5")//true
console.log(' 5 === "5"', 5 === "5")//false
console.log(' 5 == 5"', 5 == "5")//true
console.log(' 5 === (3+2) ', "5" === (3+2))//false
console.log(' 5 === 5 ', 5 === 5 )  //true  

//Concatenar (+)

console.log(5 + "3" )//53
console.log
console.log(5* "3" )//15
console.log(5 + 3 )//8

//Pida dos números al usuario y sumelos
let num1 = Number (prompt('Dame num 1'))// "5"
let num2 = Number (prompt ('Dame num 2') )// "7"
let resultado = num1 + num2
alert("El resultado de tu suma es " + resultado )

//Pedir dos números con prompt

let valorA = Number(prompt("Ingresa el valor A:"));
let valorB = Number(prompt("Ingresa el valor B:"));

let suma = valorA + valorB;
let resta = valorB - valorA;
let multiplicacion = valorA * valorB;
let division = valorB !== 0 ? (valorA / valorB) : "indefinida (división por 0)";

console.log(El valor A es = "${valorA}" y el valor B es = "${valorB}".);
console.log(La suma de "${valorA}" + "${valorB}" = "${suma}");
console.log(La resta de "${valorB}" - "${valorA}" = "${resta}");
console.log(La multiplicación de "${valorA}" * "${valorB}" = "${multiplicacion}");
console.log(La división de "${valorA}" / "${valorB}" = "${division}");
