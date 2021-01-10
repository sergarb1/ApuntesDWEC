<!-- Aqui template, donde ira el HTML que Vue renderizara -->
<template>
  <!-- Componente Quasar q-page para albergar una pagina que se pueda
  cargar en un Layout dentro de q-pagecontainer dentro de un q-layout 
  https://quasar-framework.org/components/layout-page.html -->
  <q-page  >
    <!-- Componente q-list que tiene una lista. Cada lista tiene dicersos q-items -->
    <q-list  no-border>
      <!-- Lista con 2 items, uno para la imagen, otro para la lista de estaciones -->
      <q-item class="justify-center">
        <div >
          <p>Mapa del carril bici de Valencia</p>
        </div>
      </q-item>      
      <q-item class="justify-center">
        <div>
          <iframe src="https://www.google.com/maps/d/embed?mid=1vDjGF_h1hdwPyWpY34HCObd-6aM" width="480" height="320"></iframe>
        </div>
      </q-item>
    </q-list>
  </q-page>
</template>

<style>
</style>

<!-- Aqui script, donde irá el Javascript (métodos, funciones, etc) -->
<script>
// Importamos axios para realizar el Ajax
import axios from "axios";

export default {
  name: "PageIndex",
  // Definimos las variables en Vue
  data() {
    return {
      // URL para obtener datos JSON de ValenBisi
      endpoint: "http://mapas.valencia.es/lanzadera/opendata/Valenbisi/JSON",
      // Array con información de cada uno de las estacione
      estaciones: []
    };
  },
  // Acciones al realizar al acabar de montarse Vue en el componente
  mounted() {
    this.getEstadoValenbisi();
  },
  // Metodos accesibles desde Vue
  methods: {
    // Funcion que mediante axios, obtiene el estado del ValenBisi y rellena el array Estaciones
    getEstadoValenbisi() {
      // Definimos el comportamiento de Axios
      axios.get(this.endpoint)
        .then(response => {
          var x;
          // PAsamos el contenido al array "estaciones"
          for (x in response.data.features) {
            //
            this.estaciones.push(response.data.features[x].properties.name);
          }
        })
        // En caso de error, mostramos el error para facilitar depuración
        .catch(error => {
          console.log("-----error-------");
          console.log(error);
        });
    }
  }
};
</script>
