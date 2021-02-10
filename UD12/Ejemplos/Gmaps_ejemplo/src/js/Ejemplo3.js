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

  // Geolocalizamos
  GMaps.geolocate({
    // En el caso de que funcione bien
    success: function (position) {
      // Establecemos el mapa en la seccion geolocalizada
      mapObj.setCenter(position.coords.latitude, position.coords.longitude);
      // Ponemos un cartel en el lugar que nos han geolocalizado
      mapObj.drawOverlay({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        content: '<div style="background-color:lightblue">AQUI ESTAMOS GEOLOCALIZADOS!!!</div>'
      });
    },
    // Caso error
    error: function (error) {
      alert('Geolocalizacion fallida: ' + error.message);
    },
    // Caso no soportado
    not_supported: function () {
      alert("Tu navegador no soporta geolocalizacion");
    },
    // Se ejecuta siempre
    always: function () {
      alert("Hecho!");
    }
  });
};
