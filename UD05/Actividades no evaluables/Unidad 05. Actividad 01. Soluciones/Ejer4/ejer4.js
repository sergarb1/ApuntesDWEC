"use strict";

// Funcion para ocultar elemento
function ocultar(evento){
	let miID=evento.target.id;
	// Ocultamos el elemento 
	document.getElementById(miID).hidden=true;
}

// Funcion para eliminar elemento
function eliminar(evento){
	let miID=evento.target.id;
	//alert(evento.target.id);
	// Obtenemos el elemento
	let elemento=document.getElementById(miID);
	//Eliminamos el elemento desde su padre
	elemento.parentNode.removeChild(elemento);
}

// Funcion para mostrar los ocultos
function volverAMostrar(){
	// Por cada elemento, pone hidden a false
	for(let i=1;i<=3;i++){

		let elemento= document.getElementById("miP"+i);
		if(elemento!=null){
			elemento.hidden=false;
		}
	}
}


// Asociamos los eventos, al acabar de cargarse la pagina
window.onload = function() {
	
	// Asociamos una vez cargada la pagina, a quien se oculta y a quien se elimina
	for(let i=1;i<=3;i++){
		document.getElementById("miP"+i).onclick=ocultar;
		document.getElementById("miP"+i).ondblclick=eliminar;
		
	}
}
