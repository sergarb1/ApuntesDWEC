"use strict";
// Creamos 100 checkbox con numeros aleatorios
function crearCheckbox(){
	for(let i=0;i<100;i++)
	{
		let valorAleatorio=Math.random();
		// Creamos el checkbox con value aleatorio
		let checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.name = "name";
		checkbox.value = valorAleatorio;
		checkbox.id = "id"+i;
		// Al lado del checkbox tenemos un label con el mismo valor aleatorio
		let label = document.createElement('label');
		label.appendChild(document.createTextNode(valorAleatorio));
		// Anexamos checbox y etiqueta al body
		document.body.appendChild(checkbox);
		document.body.appendChild(label);
	}
	
}
