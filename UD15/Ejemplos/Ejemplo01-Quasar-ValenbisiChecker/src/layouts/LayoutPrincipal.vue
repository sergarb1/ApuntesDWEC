<template>
  <!-- Aqui definimos el layout -->
  <q-layout view="lHh Lpr lFf">
    <!-- Cabecera del layout -->
    <q-header elevated>
      <q-toolbar>

      <!-- Boton usado para abrir "el escritorio" de la izquierda, usando Vue -->
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          <img src="~assets/valenbisiMini.png"/>ValenBisi Checker
          <div slot="subtitle">Aplicación para obtener información de ValenBisi</div>
        </q-toolbar-title>

        <div>Quasar v\{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- Definimos el layout del escritorio de la izquierda -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <!-- Introducimos componente que tiene los enlaces "EnlacesLateral.vue" 
      Esta dentro de la carpeta "components" -->
      <enlaces-lateral></enlaces-lateral>
    </q-drawer>
    <!-- Aqui metemos el page container y es donde iremos cambiando de paginas -->
    <q-page-container>
      <!-- Al meter el componente router, el analiza la ruta y decide que pagina mostrar 
      Toda esta informacion esta en la carpeta "router" -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EnlacesLateral from 'src/components/EnlacesLateral.vue'
export default {
  components: { EnlacesLateral },
  name: 'LayoutPrincipal',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>