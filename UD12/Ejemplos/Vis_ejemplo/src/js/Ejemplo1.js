/* global vis */
/* La línea anterior es para que no de error al no encontrar la variable vis,
obtenida a través de un CDN */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "timeline" }] */
/* La línea anterior es para que no de error al no usarse la variable timeline */
"use strict";

window.onload = function () {
  // Obtenemos el enlace del contenedor
  var container = document.getElementById('visualization');
  // Definimos los datos de la linea de tiempo
  var data = [
    { id: 1, content: 'item 1', start: '2013-04-20' },
    { id: 2, content: 'item 2', start: '2013-04-14' },
    { id: 3, content: 'item 3', start: '2013-04-18' },
    { id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19' },
    { id: 5, content: 'item 5', start: '2013-04-25' },
    { id: 6, content: 'item 6', start: '2013-04-27' }
  ];
  // No se definen las opciones
  var options = {};
  // Creamos la linea de tiempo indicando contendor, datos y opciones
  const timeline = new vis.Timeline(container, data, options);
};
