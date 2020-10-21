
//Numero aleatorio, minimo y maximo incluidos
function numeroAleatorio(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


// Funcion manejadora que cambia de color el fondo
function cambiarColor(evento){	
	document.body.bgColor="rgb("+numeroAleatorio(0,255)+","+numeroAleatorio(0,255)+","+numeroAleatorio(0,255)+")";
}




// Funcion que se ejecuta cuando se ha cargado todo el DOM
function inicio(){
  //asignamos a calcular dni a onkeyup
  document.ondblclick=cambiarColor;
}

// Asignamos una funcion de inicio asociada a que se cargue todo el DOM
document.body.onload="inicio"
