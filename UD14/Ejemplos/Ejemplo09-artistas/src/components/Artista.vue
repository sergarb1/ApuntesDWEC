<!-- Fichero VUE en formato SFC (Single File Component) -->
<template>
  <div class="c-artistas" v-if="datos">
    <h1 class="text-right">{{ datos.nombre }}</h1>
    <div class="thumbnail">
      <img :src="datos.imagen" class="img-responsive foto-artista" />
      <div class="caption" v-if="datos.descripcion">
        <p>{{ datos.descripcion }}</p>
      </div>
    </div>

    <h3>
      Discograf&iacute;a <small>{{ datos.discos.length }}</small>
    </h3>
    <div v-if="!datos.discos.length">
      <span class="label label-danger">Ooops!</span>
      Los discos de este artista no están disponibles.
    </div>
    <ul v-else class="list-unstyled">
      <li v-for="disco in datos.discos">
        <div class="row">
          <div class="col-sm-12">
            <h3>
              {{ disco.nombre }} <small>{{ disco.lanzamiento }}</small>
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <img
              :src="disco.portada"
              :alt="disco.nombre"
              class="img-responsive portada-disco"
            />
          </div>
          <div class="col-sm-8">
            <ol v-if="disco.canciones.length">
              <li
                v-for="cancion in disco.canciones"
                :class="{ 'text-muted': !cancion.nombre }"
              >
                {{ cancion.nombre || "Nombre desconocido" }}
                <span class="label label-default pull-right">
                  {{ cancion.duracion || "00:00" }}
                </span>
              </li>
            </ol>
            <div v-else>
              <span class="label label-danger">Ooops!</span>
              Las canciones de este disco no están disponibles.
            </div>
          </div>
        </div>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      datos: {},
    };
  },
  // Este metodo, observa los parametros de la ruta dada con route-link y con ellos sabe que artista es -->
  methods: {
    obtenerInfo: function () {
      var paramArtista = this.$route.params.artista,
        consulta = this.$store.state.datosJSON.artistas.find(function (el) {
          return el.id == paramArtista;
        });

      if (!consulta) {
        this.$router.push("/");
      }

      this.datos = consulta;
    },
  },
  // Cuando se crea el objeto, se llama a obtener info
  created: function () {
    this.obtenerInfo();
  },
  // Watchers: https://vuejs.org/v2/guide/computed.html#Watchers
  // Si se produce el evento asincrono de cambio de ruta, llama de nuevo a obtener info
  watch: {
    $route: function (newRoute, currentRoute) {
      this.obtenerInfo();
    },
  },
};
</script>

<style>
</style>