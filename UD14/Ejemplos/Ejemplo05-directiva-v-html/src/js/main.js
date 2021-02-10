/* global Vue */
/* La línea anterior es para que no de error al no encontrar la variable Vue,
obtenida a través de un CDN */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "app" }] */
/* La línea anterior es para que no de error al no usarse la variable app */
"use strict";

// Declaramos la aplicación VUE
const app = new Vue({
  // Indicamos el ID del Div que contiene la APP Vue
  el: '#app',
  data: {
    // Valor definido por defecto de la variable codigo
    codigo: [
      '<h1>Hola mundo</h1>',
      '<div class="alert alert-success">',
      'Editor HTML básico con Vue',
      '</div>'].join('')
    // Se usa join al final para convertir el array en una sola String
  }
});
