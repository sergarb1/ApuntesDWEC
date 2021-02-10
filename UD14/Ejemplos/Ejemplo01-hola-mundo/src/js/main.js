/* global Vue */
/* La línea anterior es para que no de error al no encontrar la variable Vue,
obtenida a través de un CDN */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "app" }] */
/* La línea anterior es para que no de error al no usarse la variable app */
"use strict";

// Declaramos la aplicación VUE
const app = new Vue({
  el: '#miApp',
  data: {
    message: 'Hola mundo!'
  },
  methods: {
    // Metodo que divide las letras con split, las invierte en orden y luego las une en una cadena, consiguiendo el efecto de revertir la frase
    // No recibe parametros, se aplica sobre el valor de la variable "message"
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
