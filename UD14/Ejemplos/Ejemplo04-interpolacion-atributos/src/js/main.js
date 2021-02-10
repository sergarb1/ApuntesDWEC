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
  // Establece los valores por defecto de los datos
  data: {
    botonesPequenos: true,
    colorCaja: 'color-verde',
    desactivar: true
  },
  methods: {
    // Implementa el metodo que cambia el valor de colorCaja
    cambiarColor: function (color) {
      this.colorCaja = 'color-' + color;
    },
    // Metodo que "invierte" el valor de desactivar
    cambiarEstadoBotones: function () {
      this.desactivar = !this.desactivar;
    }
  }
});
