/* global Vue */
/* La línea anterior es para que no de error al no encontrar la variable Vue,
obtenida a través de un CDN */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "app" }] */
/* La línea anterior es para que no de error al no usarse la variable app */
"use strict";

import ComponenteTabla from '../components/ComponenteTabla.vue'
// Importamos los componentes
// NOTA: para que funcione con Webpack, hemos instalado el plugin "vue-loader"
// Se instala con "npm install vue vue-loader vue-template-compiler css-loader"
// Los ficheros package.json y webpack.config.js se han adaptado para ello en este ejemplo siguiendo https://vue-loader.vuejs.org/guide/#manual-setup

// Registramos componente cargado
Vue.component('componente-tabla', ComponenteTabla)

const app = new Vue({
  // Indicamos el ID del Div que contiene la APP Vue
  el: '#app'
});
