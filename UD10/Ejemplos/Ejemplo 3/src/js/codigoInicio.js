// Definimos manejador de inicio
import  { enviarMensaje } from './eventos.js';
import  { escapeHtml } from './eventos.js';


// Funcion cargada cuando el DOM este disponible. Inicializa el acceso a Firebase y Firestore
// y rellena el div que contiene el chat.
document.addEventListener('DOMContentLoaded', function(){
  // Recuperamos el chat del localStorage
  let nuestroChat = document.getElementById("nuestroChat");
  nuestroChat.innerHTML = localStorage.getItem("chat");

  // Anyadimos manejador de enviar
  document.getElementById("enviar").addEventListener("click", enviarMensaje);
 
});