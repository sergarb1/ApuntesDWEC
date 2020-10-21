"use strict";


// Simplemente, esta función cuando esta encima, controla el evento de "
// "estamos con la bola encima, podemos soltar"
function allowDrop(ev) {
  // Este ccódigo evita el comportamiento por defecto de este evento
  ev.preventDefault();
}

// Funcion a la que llamamos cuando se produce el "drag"
// Hacemos que el evento pueda transferir un dato ("informacion")

function drag(ev) {
  ev.dataTransfer.setData("Informacion", ev.target.id);
}


// Funcion a la que llamamos cuando se produce el "drpop"
function drop(ev) {
  // Prevenimos su comportamiento por defecto
  ev.preventDefault();
  // Hacemos que el evento reciba un dato ("informacion")
  let data = ev.dataTransfer.getData("Informacion");
  // Si el elemento que hemos soltado era la bola
  if(data==="bola"){
        document.getElementById("papelera").src="papeleraLLena.jpg";
  }
}




// Funcion que se ejecuta cuando se ha cargado todo el DOM
function inicio(){
  //asignamos los manejadores para "Drag and drop"
  document.ondragstart=drag;
  document.ondragover=allowDrop;
  document.ondrop=drop;
  
}

// Asignamos una funcion de inicio asociada a que se cargue todo el DOM
document.body.onload="inicio"