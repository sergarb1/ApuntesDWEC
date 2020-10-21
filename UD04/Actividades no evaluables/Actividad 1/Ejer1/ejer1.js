"use strict";

// Funcion que actualiza un elemento p con id p1, mostrando posicion del raton
function mostrarPosicion(evento) {

	document.getElementById("p1").innerHTML = "Posicion X " + evento.clientX + " Posicion Y " + evento.clientY;

}

// Funcion que se ejecuta cuando se ha cargado todo el DOM
function inicio(){
	// Asignamos un manejador a onmouseover
	document.onmousemove = mostrarPosicion;
}

// Asignamos una funcion de inicio asociada a que se cargue todo el DOM
document.body.onload="inicio"