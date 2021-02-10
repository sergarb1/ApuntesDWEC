/* global Cleave */
/* La línea anterior es para que no de error al no encontrar la variable Cleave,
obtenida a través de un CDN */
/* eslint no-new:[0] */
/* La linea anterior desactiva la regla de no usar new sin una variable a la izquierda */

// Se ejecuta
window.onload = function () {
  // De los campos con clase input-0, detecta segun el valor el tipo de tarjeta de cretido y lo pone en los
  // elementos con clase .type
  new Cleave('.input-0', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
      // Si cambia el elemeno de tarjeta de credito, cambiamos los elementos con la clase .type
      document.querySelector('.type').innerHTML = type;
    }
  });

  // Definimos patron de fecha para elementos con clase input-3
  // Decidimos Y m d con delimitador "."
  new Cleave('.input-3', {
    date: true,
    datePattern: ['Y', 'm', 'd'],
    delimiter: '.'
  });
  // DEfinimos que los elementos con clase input-4 tienen el decima con "," y cada 3 numeros con "."
  new Cleave('.input-4', {
    numeral: true,
    numeralDecimalMark: ',',
    delimiter: '.'
  });
  // Los elementos con la clase input-1 son numerales y tienen como prefijo "€"
  new Cleave('.input-1', {
    numeral: true,
    prefix: '€'
  });

  // Los elementos con input-5 como clase. Estos seran en mayusculas y tendran delimitadores segun los bloques indicados
  new Cleave('.input-5', {
    uppercase: true,
    delimiters: ['.', '.', '-'],
    blocks: [3, 3, 3, 2]
  });

  // Ejemplo con un prefijo (el value) que puede ser eliminado y delimitadores donde se indica
  new Cleave('.input-7', {
    uppercase: true,
    delimiter: '-',
    blocks: [6, 2, 3, 3]
  });
  // Ejemplo en el que hay distintos tipos de delimitadores
  new Cleave('.input-8', {
    uppercase: true,
    delimiters: [' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' '],
    blocks: [3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0]
  });

  // En este ejemplo el delimitador se escribe tras escribir el siguiente caracter
  new Cleave('.input-9', {
    delimiter: '-',
    blocks: [3, 3, 3],
    delimiterLazyShow: true
  });
};
