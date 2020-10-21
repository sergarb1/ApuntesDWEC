"use strict";

// Funcion para eliminar localStorage
function eliminarLocalStorage(){
	localStorage.clear();
}


// Codigo al cargarse la pagina para obtener la cookie

window.onload=function (){
    
	let b=document.getElementById("botonEliminar");
	b.onclick=eliminarLocalStorage;
	
	
    let miValor=localStorage.getItem("visitas");
	// Si no esta establecida, la pongo a 0 y si lo esta sumo 1, para luego re-establecerla
	if(miValor===null){
		miValor="0";
	}else{
		miValor=(parseInt(miValor)+1).toString();	
	}
	localStorage.setItem("visitas",miValor);
	
	
    
	document.getElementById("divVisitas").innerHTML=miValor;
}

