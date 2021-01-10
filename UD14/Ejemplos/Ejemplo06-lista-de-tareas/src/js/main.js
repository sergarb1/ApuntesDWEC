// Declaramos la aplicación VUE
let app = new Vue({
  // Indicamos el ID del Div que contiene la APP Vue
  el: '#app',
  data: {
    nuevaTarea: '',
    tareas: [],
    mensajeTareaAgregada: false
  },
  methods: {
    // Metodo para agregar una tarea
    agregarTarea: function () {
      // Crea una nueva tarea que mete al final del array "tarea"
      // La coge usando el valor de nuevaTarea, la fecha del sistema y la marca como no finalizada
      this.tareas.push({
        nombre: this.nuevaTarea.trim(),
        fecha: new Date(),
        finalizada: false
      });
      // Tras agregar, pone nuevaTarea a vacio y marca mensajeTareaAgregada
      this.nuevaTarea = '';
      this.mensajeTareaAgregada = true;
    },
    eliminarTarea: function (tarea) {
      // Busca el indice de la tarea y la elimina del array de tareas
      let indice = this.tareas.indexOf(tarea);

      this.tareas.splice(indice, 1);
    }
  },
  // Cuando se crea el Vue, cargamos los datos de localStorage
  created: function () {
    if (localStorage.getItem('tareas'))
      this.tareas = JSON.parse(localStorage.getItem('tareas'));
  },
  // anyadimos un watcher de tareas. Hacemos que cada cambio se guarde en localStorage
  // importante poner deep:true para que asi coja los cambios en todas las propiedades anidadas
  watch: {
    tareas: {
      handler() {
        localStorage.setItem('tareas', JSON.stringify(this.tareas));
      },
      deep: true,
    },
  },
});
