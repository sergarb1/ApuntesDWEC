/* global Chart */
/* La línea anterior es para que no de error al no encontrar la variable Chart,
obtenida a través de un CDN */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "lineChart" }] */
/* La línea anterior es para que no de error al no usarse la variable lineChart */
"use strict";

window.onload = function () {
  /// Obtenemos el enle al canvas
  var speedCanvas = document.getElementById("speedChart");
  // Elegimos fuente y tamanyo
  Chart.defaults.global.defaultFontFamily = "Lato";
  Chart.defaults.global.defaultFontSize = 18;

  // Primera linea datos y sus caracteristicas (rojo)
  var dataFirst = {
    // Etiqueta primer conjunto
    label: "Coche A - Velocidad (km/h)",
    // Datos
    data: [0, 59, 75, 20, 20, 55, 40],
    // Caracteristicas
    lineTension: 0.3,
    fill: false,
    borderColor: 'red',
    backgroundColor: 'transparent',
    pointBorderColor: 'red',
    pointBackgroundColor: 'lightgreen',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rect'
  };
    // Segunda linea datos y sus caracteristicas
  var dataSecond = {
    // Etiqueta segundo conjunto
    label: "Coche B - Velocidad (km/h)",
    // Datos
    data: [20, 15, 60, 60, 65, 30, 70],
    // Caracteristicias
    lineTension: 0.3,
    fill: false,
    borderColor: 'purple',
    backgroundColor: 'transparent',
    pointBorderColor: 'purple',
    pointBackgroundColor: 'lightgreen',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2
  };
    // Aqui indicamos las etiquetas de los puntos y los conjuntos de datos definidos anteriormente
  var speedData = {
    // Etiquetas d emedida
    labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
    datasets: [dataFirst, dataSecond]
  };
    // Definimos las opciones del grafico
  var chartOptions = {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: 'black'
      }
    }
  };
    /// Creamos el chart con los datos preparados y las opciones establecidad para que se imprima en nuestro canvas, indicando que son lineas
  const lineChart = new Chart(speedCanvas, {
    type: 'line',
    data: speedData,
    options: chartOptions
  });
};
