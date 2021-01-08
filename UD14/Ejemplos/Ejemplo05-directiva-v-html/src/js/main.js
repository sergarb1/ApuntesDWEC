// Declaramos la aplicación VUE
let app = new Vue({
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