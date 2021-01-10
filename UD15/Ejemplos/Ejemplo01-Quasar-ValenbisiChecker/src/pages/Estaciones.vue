<!-- Aqui template, donde ira el HTML que Vue renderizara -->
<template>
  <!-- Componente Quasar q-page para albergar una pagina que se pueda
  cargar en un Layout dentro de q-pagecontainer dentro de un q-layout 
  https://quasar-framework.org/components/layout-page.html-->
  <q-page >
      <div class="row justify-center">
        <img alt="Logo ValenBisi" src="~assets/logoValenBisi.png">
      </div>
        <q-expansion-item expand-separator icon="account_balance" label="Estaciones ValenBisi" default-opened >
          <!-- Usamos el componente q-table
              En el definimos:
                - Fuente de datos
                - Como organizamos las columnas
                - Key (campo con valor unico)
                https://quasar-framework.org/components/datatable.html
          -->
          <q-list >
            <q-item-label header>
              Datos actualizados {{ ultimaActualizacion }}
              <!-- Boton que actualiza los datos de ValenBisi, que se ve como un iconito
              https://quasar-framework.org/components/button.html
              -->
              <q-btn @click="getEstadoValenbisi" icon="update"/>
            </q-item-label>
          </q-list>
          <q-table :data="estaciones" :columns="columns" row-key="nombre"  dense></q-table>
        </q-expansion-item>
  </q-page>
</template>

<!-- Aqui todo lo relacionado con el estilo -->
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
      endpoint: "https://mapas.valencia.es/lanzadera/opendata/Valenbisi/JSON",
      // Array con información de cada uno de las estacione
      estaciones: [],
      // Fecha de ultima actualizacion en formato Cadena
      ultimaActualizacion: "",
      // Array que define las columnas de la tabla
      columns: [
        {
          name: "Nombre",
          required: true,
          label: "Nombre estación",
          align: "left",
          field: "nombre",
          sortable: true
        },
        {
          name: "bicis",
          required: true,
          label: "Bicis disponibles",
          align: "left",
          field: "bicis",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "libres",
          required: true,
          label: "Anclajes libres",
          align: "left",
          field: "libres",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "total",
          required: true,
          label: "Total",
          align: "left",
          field: "total",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        }
      ]
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
      axios
        .get(this.endpoint)
        .then(response => {
          let x;
          // Vaciamos el array
          this.estaciones = [];
          // Pasamos el contenido al array "estaciones"
          for (x in response.data.features) {
            //Formamos el dato
            var dato;
            dato = {
              nombre: response.data.features[x].properties.address,
              bicis: response.data.features[x].properties.available,
              libres: response.data.features[x].properties.free,
              total: response.data.features[x].properties.total
            };
            // Lo metemos en un array
            this.estaciones.push(dato);
          }
          // Actualizamos la ultima fecha de actualizacion
          this.ultimaActualizacion = new Date().toLocaleString();
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