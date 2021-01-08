// Importamos los datos del fichero data.js

import contenido from "./data.js"


// Declaro una Store Vuex, accesible por todos los componentes
const store = new Vuex.Store({
	// Esta es una variable que usamos desde Vuex
	state: {
	  datosJSON:contenido.datosJSON
	},
	// Para modificar variables de la store y mantener la reactividad, usamos mutaciones
	// Aqui definimos una para añadir un nuevo artista
	mutations: {
	  anyadirArtista (state, nuevoArtista) {
		// Modificamos el dato en Vuex
		state.datosJSON.artistas.push({
			id: state.datosJSON.artistas.length + 1,
			nombre: nuevoArtista.nombre,
			imagen: nuevoArtista.imagen,
			descripcion: nuevoArtista.descripcion,
			discos: []
		});
	  }
	}
  });



// Gestionamos los componentes
import NoEncontrado404 from '../components/404.vue'
import Artista from '../components/Artista.vue'
import Inicio from '../components/Inicio.vue'

// Importamos los componentes
// NOTA: para que funcione con Webpack, hemos instalado el plugin "vue-loader"
// Se instala con "npm install vue vue-loader vue-template-compiler css-loader"
// Los ficheros package.json y webpack.config.js se han adaptado para ello en este ejemplo siguiendo https://vue-loader.vuejs.org/guide/#manual-setup


// Registramos componente cargado.
// En este caso estan comentados porque al usarlos a traves de router, no es necesario
/*
Vue.component('noencontrado4040', NoEncontrado404)
Vue.component('artista', Artista)
Vue.component('inicio', Inicio)
*/


// Definimos el router y los componentes asociados a cada ruta (Inicio, Artista y NoEncontrado 
// Mas informacion https://vuejs.org/v2/guide/routing.html


// Estbalecemos las rutas
const router = new VueRouter({
	routes: [
		// EL orden de las rutas importa, se analizan en cascada

		// Si se va a la ruta / , carga el componente Inicio en "router-view"
		{path: '/', component: Inicio},
		
		// Si se va a la ruta /Artista , carga el componente Artista en "router-view"
		// Lo que siga artista (segunda parte de la ruta) se guarda en una variable "artista"
		{path: '/artista/:artista', component: Artista},
		// En caso de cualquier otra ruta, carga compontente no encontrado
		{path: '*', component: NoEncontrado404}
	]
});

let app = new Vue({
	router,
	store,
	// Mapeamos los datos del datosJSON
	data(){
		return {
			artistas: this.$store.state.datosJSON.artistas,
			mostrarFormulario: false,
			nuevoArtista: {
				imagen: '',
				nombre: '',
				descripcion: ''
			}
		}
	},
	// Metodo para agregar un nuevo artista (sin discos) 
	methods: {
		agregarArtista: function(){
			//hago la mutacion
			store.commit('anyadirArtista', this.nuevoArtista)
			// limpio el formulario
			this.limpiarFormulario();
		},
		// Metodo para limpiar el formulario
		limpiarFormulario: function(){
			this.nuevoArtista = {
				imagen: '',
				nombre: '',
				descripcion: ''
			};
		}
	}
	// Indicamos sobre que id se monta la aplicaicon
}).$mount('#app');
