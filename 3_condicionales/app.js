//solicitar datos de usuario
 let nombre = prompt("Ingrese su nombre:");
    let edad = parseInt(prompt("Ingrese su edad:"));

    if (nombre === "Mario" || nombre === "Carlos") {
        alert("Puede ingresar al VIP");
    } else if (edad >= 18) {
        alert("Puede ingresar a la discoteca");
    } else {
        alert("No puede ingresar a la discoteca");
    }
