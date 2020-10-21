"use strict";

// Funcion que calculr letraDNI (Reutilizamos codigo!!!)
function letraDNI(numeroDni) {
	let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	return letras[numeroDni % 23];
}


// funcion para calcular el DNI a traves de una pulsación de teclado.
function calcularDNI(evento) {

	let letra = String.fromCharCode(evento.keyCode);

	document.getElementById("resultado").innerHTML = "DNIs con letra " + letra + " ";
	for (let i = 0; i <= 9999; i++) {
		if (letraDNI(i) === letra) {
			document.getElementById("resultado").innerHTML += i + " ; ";
		}
	}


}

// Funcion que se ejecuta cuando se ha cargado todo el DOM
function inicio(){
	//asignamos a calcular dni a onkeyup
	document.onkeyup = calcularDNI;
}

// Asignamos una funcion de inicio asociada a que se cargue todo el DOM
document.body.onload="inicio"