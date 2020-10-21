"use strict";

//Inserta un elemento aleatorio
function insertar(evento){
	
	// Creamos el elemento LI y su texto por separado
	let nuevoHijo=document.createElement("LI");
	let nodoTexto=document.createTextNode(Math.random());
	// Unimos el texto al elemento LI
	nuevoHijo.appendChild(nodoTexto);
	// Añadimos el elemento LI a la UL
	document.getElementById("miLista").appendChild(nuevoHijo);
	
}

