// Declaramos la aplicación VUE
let app = new Vue({
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