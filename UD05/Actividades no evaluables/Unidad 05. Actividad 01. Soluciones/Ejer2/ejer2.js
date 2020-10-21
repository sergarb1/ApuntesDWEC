"use strict";

// Funcion que devuelve true si es casi primo (segun la definicion del ejercicio)
function esCasiPrimo(n){
	
	let oportunidad=0;
	for(let i=2;i<n;i++){
		if(n%i==0){
			oportunidad++;
			if(oportunidad>1){
				return false;
			}
		}
	}
	
	if(oportunidad==1)
		return true;
	else
		return false;
}

// Creamos la tabla y sus elementos
function crearTabla(){
	
	// Creamos la tabla
	let tabla = document.createElement("TABLE");

	let numeroUnico=1;
	
	for(let i=0;i<100;i++){
		// Creamos un elemento TR		
		let fila=document.createElement("TR");
		for(let j=0;j<100;j++){
			// Creamos TD y texto
			let celda=document.createElement("td");
			let texto=document.createTextNode(numeroUnico);
			// Anexamos texto al TD
			celda.appendChild(texto);
			// anexamos el TD al TR
			fila.appendChild(celda);
			
			// Si es casi primo, cambiamos el fondo
			if(esCasiPrimo(numeroUnico)){
				celda.style.backgroundColor="Yellow";
			}
			
			// Incrementamos el numero unico
			numeroUnico++;
			
		}
		// Anexamos el TR a la tabla
		tabla.appendChild(fila);
	}
	// Anexamos la tabla al body
	document.body.appendChild(tabla);
	
}
