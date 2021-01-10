// Importamos la base de datos Firestore de Firebase declarada en "firebase.js"
import { db } from './firebase.js'
// Importamos de VueFire el plugin para usar Firestore 
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin);

// Declaramos la aplicación VUE
let app = new Vue({
  // Indicamos el ID del Div que contiene la APP Vue
  el: '#app',
  data: {
    nuevaTarea: '',
    mensajeTareaAgregada: false,
    // Aunque la enlazamos a Firestore, es necesario declararla
    tareas: []
  },
  // Enlazamos la variable definida arriba, "tareas" con una coleccion de Firestore.
  // Esto nos permitira que si se actuzaliza la coleccion Firestore, se nos actualizara la variable automaticamente
  // Aunque no es bidireccional, para escribir, no basta con escribir en la variable, debemos escribir a Firestore 
  firestore: {
    // En Firestore, nuestra coleccion se llama "tareas"
    tareas: db.collection('tareas'),
  },
  methods: {
    // Metodo para agregar una tarea
    agregarTarea: function () {


      // Al agregar la tarea, obtenemos el último ID Libre para darselo a la tarea desde Firebase
   
      // Despues, añadimos la tarea en Firestore
      db.collection('tareas').add({
        nombre: this.nuevaTarea.trim(),
        fecha: new Date(),
        finalizada: false
        // Despues de añadir la tarea, la actualizamos añadiendo el id autogenerado por firestore
      }).then(function(docRef) {
        //console.log("Document written with ID: ", docRef.id);
        docRef.update({ idTarea: docRef.id })
      })


      // Tras agregar, pone nuevaTarea a vacio y marca mensajeTareaAgregada
      this.nuevaTarea = '';
      this.mensajeTareaAgregada = true;
    },
    // Actualizamos en Firebase el estado de la tarea finalizada
    actualizarEstadoTareaFinalizada: function(tarea){
      // Busca el indice de la tarea
      let indice = this.tareas.indexOf(tarea);
      // Obtenemos el idTarea de la tarea y actualizamos la propiedad "finalizada"
      db.collection('tareas').doc(this.tareas[indice].idTarea).update({ finalizada: !this.tareas[indice].finalizada})
    },
    // Eliminamos una tarea de Firebase
    eliminarTarea: function (tarea) {
      // Busca el indice de la tarea
      let indice = this.tareas.indexOf(tarea);
      // Obtenemos el idTarea de la tarea y eliminamos ese documento de la coleccion firestore
      db.collection('tareas').doc(this.tareas[indice].idTarea).delete();
    }
  }
});
