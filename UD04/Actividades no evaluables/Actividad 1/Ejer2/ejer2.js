"use strict";

let estado=-1;

// Nota: los manejadores de las funciones en este ejemplo estan en el HTML

// Funcion para "comenzar" tal como se pide en el enunciado
function comenzar(){
	if(estado!==-1){
		console.log("Ya estamos saludando, se cancela");
	}
	else{
		estado=setInterval("alert('hola');",5000);
	}
}


// Funcion para parar, tal como se puede el enunciado
function parar(){
	
	if(estado!==-1){
		clearInterval(estado);
		estado=-1;
	}
	else{
	console.log("No hay saludo a parar")
	}
	
	
}