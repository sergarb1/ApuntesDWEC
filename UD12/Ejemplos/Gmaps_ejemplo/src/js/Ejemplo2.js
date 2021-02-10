/* global GMaps */
/* La línea anterior es para que no de error al no encontrar la variable GMaps,
obtenida a través de un CDN */
"use strict";

window.onload = function () {
  /* Creamos el objeto del mapa, indicando en que DIV se pone
            y en que latitud y longitud */
  var mapObj = new GMaps({
    el: '#map',
    lat: 48.857,
    lng: 2.295
  });
    // Dibujamos un contenido HTML en la posicion de lat y lng
  mapObj.drawOverlay({
    lat: 48.857,
    lng: 2.295,
    // Contenido dibujado mediante un DIV
    content: '<div style="background-color:green">La X indica el tesoro</div>'
  });
};
