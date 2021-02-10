/* global Vue */
/* global axios */
/* La líneas anteriores son para que no de error al no encontrar las variables Vue y axios,
obtenidas a través de un CDN */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "app" }] */
/* La línea anterior es para que no de error al no usarse la variable app */
"use strict";

// Declaramos la aplicación VUE
const app = new Vue({
  // Indicamos el DIV donde esta nuestra APP Vue
  el: '#app',
  data: {
    usuarios: []
  },
  /*
  Al ser montada la aplicacion de Vue 2 https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
  Hacemos una peticion GET a la URL. Al recibir la respuesta en formato JSON, simplemente mapeamos
  dicha respuesta a la variable usuarios
  */
  mounted: function () {
    axios.get('https://jsonplaceholder.typicode.com/users').then(
      response => (this.usuarios = response.data)
    );
  }
});
