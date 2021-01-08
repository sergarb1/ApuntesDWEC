// Declaramos la aplicación VUE
let app = new Vue({
    // Indicamos el ID del Div que contiene la APP Vue
    el: '#app',
    data: {
      //lista de todos los mensajes
      mensajes: [],
      //mensaje digitado por cada usuario
      nuevoMensaje: {
        izquierda: '',
        derecha: ''
      },
      //maximo numero de mensajes vacios, antes de validar
      limiteMensajesVacios: 5,
      //datos de los usuarios
      usuarios: {
        izquierda: {
          nombre: 'Hacker Desayunando',
          mensajesEnviados: 0,
          mensajesVacios: 0,
          avatar: 'https://live.staticflickr.com/27/97119622_7e2d21df6d.jpg'
        },
        derecha: {
          nombre: 'Super programadora',
          mensajesEnviados: 0,
          mensajesVacios: 0,
          avatar: 'https://live.staticflickr.com/3090/5866053008_7ca51c49e6.jpg'
        }
      }
    },
    methods: {
      //publicar mensaje
      publicarMensaje: function (quienPublica) {
        // Se coge el mensaje de array asociativo con valor de la llave "quienPublica" ('izquierda' o 'derecha')
        var mensaje = this.nuevoMensaje[quienPublica];

        // si el mensaje no esta vacio, lo mete dentro del array de mensajes con su contenido, quien lo publica y la fecha del sistema
        if (mensaje.trim() != '') {
          this.mensajes.push({
            contenido: mensaje,
            posicion: quienPublica,
            fecha: new Date()
          });
          // Al que lo publica se le sube el contador de mensajes
          this.usuarios[quienPublica].mensajesEnviados++;

          this.nuevoMensaje[quienPublica] = '';
          // Se hace scroll de la conversacion.
          this.scrollConversacion();
        } else {
          // Se cuenta como mensaje vacio
          this.usuarios[quienPublica].mensajesVacios += 1;

          var mensajesVacios = this.usuarios[quienPublica].mensajesVacios;
          // Si se pasa del limite, se muestra un mensaje de advertencia
          if (mensajesVacios <= this.limiteMensajesVacios) {
            this.mensajes.push({
              contenido: [
                'Advertencia #',
                mensajesVacios,
                ' para ',
                this.usuarios[quienPublica].nombre,
                ': no se permite el envío de mensajes vacíos. ',
                'Comenzaremos a validar tus mensajes cuando tengas ',
                this.limiteMensajesVacios,
                ' llamadas de atención.'
              ].join(''),
              posicion: 'centro',
              fecha: new Date()
            });
            // Se hace scroll tras el mensaje
            this.scrollConversacion();
          }

          this.nuevoMensaje[quienPublica] = '';
        }
      },
      //hacer scroll
      scrollConversacion: function () {
        var el = document.getElementById('conversacion');

        el.scrollTop = el.scrollHeight - el.clientHeight;
      },
      //borrar mensajes y resetear contadores
      borrar: function () {
        // Vacia el array de mensajes
        this.mensajes = [];
        // Pone a 0 los contadores
        for (var usuario in this.usuarios) {
          if (this.usuarios.hasOwnProperty(usuario)) {
            this.usuarios[usuario].mensajesEnviados = 0;
            this.usuarios[usuario].mensajesVacios = 0;
          }
        }
      }
    }
  });