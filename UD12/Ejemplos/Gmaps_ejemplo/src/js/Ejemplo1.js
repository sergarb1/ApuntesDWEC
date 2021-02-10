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

  // Lanzamos la geolocalizacion
  GMaps.geolocate({

    // Si se acepta y funciona...
    success: function (position) {
      // Ponemos el objeto del mapa en la posicion de la geolocalizacion
      mapObj.setCenter(position.coords.latitude, position.coords.longitude);
    },
    // Si falla la geolocalizacion
    error: function (error) {
      // Mensaje de error
      alert('Geolocalizacion fallida: ' + error.message);
    },
    // Si no esta soportado...
    not_supported: function () {
      alert("Tu navegador no soporta geolocalizacion");
    },
    // Esto se ejecuta pase lo que pase
    always: function () {
      alert("Hecho!");
    }
  });
};
