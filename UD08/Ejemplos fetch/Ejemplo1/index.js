"use strict";


function fajax(parametro){

	// Establecemos a que direccion realizar fetch
	fetch("https://apuntesfpinformatica.es/DWEC/EjemploUD08-1AJAX.php", {
		// Establcemos metodo POST
		method:"POST",
		// Generamos queryString 
		body:"accion="+parametro,
		// Indicamos en las cabeceras como es el contenido que enviamos
		headers: {
			'Content-type': 'application/x-www-form-urlencoded'
		}
		// Codigo a ejecutar al recibir la respuesta
	}).then(function(response){
		// Si la respuesta es correcta
		if (response.ok) {
			// Codigo para llamar funcion/hacer funcion anonima, que gestione codigo de la respuesta
			// en este ejemplo, "respuesta" contiene texto devuelto por el servidor
			response.text().then( function (respuesta) {
				document.getElementById('capa').innerHTML=respuesta;
			});
		}
	});
}



// Establecemos a que direccion realizar fetch
fetch("https://miurl.com/web.php", {
	// Establecemos método POST
	method:"POST",
	// Generamos JSON 
	body:JSON.stringify( {
		accion: parametro
	}),
	// Indicamos en las cabeceras como es el contenido que enviamos
	headers: {
		'Content-type': 'application/json; charset=UTF-8'
	}
	// Código a ejecutar al recibir la respuesta
	}).then(function(response){
		// Si la respuesta es correcta
		if (response.ok) {
		// Codigo para llamar funcion / hacer funcion anonima,
           // que gestione codigo de la respuesta
	     // en este ejemplo, "respuesta" contiene JSON 
          //devuelto por el servidor
			response.json().then( function (respuesta) {
			document.getElementById('capa').innerHTML=respuesta.accion;
			});
		}
	});
}