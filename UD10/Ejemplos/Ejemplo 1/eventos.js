"use strict";
// Funcion que recoge elementos del formulario (usuario y mensaje) y con ellos
// anayade una entrada al chat
function enviarMensaje() {
  let usuario = escapeHtml(document.getElementById("usuario").value);
  let mensaje = escapeHtml(document.getElementById("mensaje").value);
  let nuestroChat = document.getElementById("nuestroChat");

  nuestroChat.innerHTML = "<p>" + escapeHtml(usuario + " : " + mensaje) + "</p>" + nuestroChat.innerHTML;


  // Guardamos en localStorage
  localStorage.setItem("chat", nuestroChat.innerHTML);
}
