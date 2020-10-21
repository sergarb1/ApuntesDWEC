"use strict";


import $ from 'jquery';

 // Funcion que recibe un texto y devuelve el mismo texto escapando el HTML
 // utilizada para evitar ataques XSS
 export function escapeHtml(text) {
   return text
     .replace(/&/g, "&amp;")
     .replace(/</g, "&lt;")
     .replace(/>/g, "&gt;")
     .replace(/"/g, "&quot;")
     .replace(/'/g, "&#039;");
 }


    // Funcion que recoge elementos del formulario (usuario y mensaje) y con ellos
    // anayade una entrada a Firestore
 export function enviarMensaje() {
    let usuario = escapeHtml($("#usuario").val());
    let mensaje = escapeHtml($("#mensaje").val());
  
    $("#nuestroChat").html( "<p>" + escapeHtml(usuario + " : " + mensaje) + "</p>" + $("#nuestroChat").html());
  
  
    // Guardamos en localStorage
    localStorage.setItem("chat", $("#nuestroChat").html());  
}