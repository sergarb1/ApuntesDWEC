"use strict";

// Funcion que recibe un texto y devuelve el mismo texto escapando el HTML
// utilizada para evitar ataques XSS
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}



// Definimos manejador de inicio

// Funcion cargada cuando el DOM este disponible.
// Rellena el div que contiene el chat.
// Asimismo, tambien mete un manejador, para que cuando Firestore le avise de un cambio
// en la base de datos, el actualice el chat.
document.addEventListener('DOMContentLoaded', function () {

  // Recuperamos el chat del localStorage
  let nuestroChat = document.getElementById("nuestroChat");
  nuestroChat.innerHTML = localStorage.getItem("chat");

  // Anyadimos manejador de enviar
  document.getElementById("enviar").addEventListener("click", enviarMensaje);



});