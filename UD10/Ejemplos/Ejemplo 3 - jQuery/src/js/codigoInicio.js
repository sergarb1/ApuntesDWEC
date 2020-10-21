// Definimos manejador de inicio

import $ from 'jquery';
import  { enviarMensaje } from './eventos.js';


// Funcion cargada cuando el DOM este disponible. Inicializa el acceso a Firebase y Firestore
// y rellena el div que contiene el chat.
$( document ).ready(function() {  // Recuperamos el chat del localStorage
  $("#nuestroChat").html(localStorage.getItem("chat"));

  // Anyadimos manejador de enviar
  document.getElementById("enviar").addEventListener("click", enviarMensaje);
 
});