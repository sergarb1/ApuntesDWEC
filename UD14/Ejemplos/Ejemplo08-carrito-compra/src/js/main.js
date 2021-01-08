// Declaramos la aplicación VUE
let app = new Vue({
	el: '#app',
	data: {
		// Definimos una coleccion de productos
		productos: [
			{
				'producto': 1,
				'descripcion': 'Galletas',
				'precio': '5.30'
			},{
				'producto': 2,
				'descripcion': 'Leche',
				'precio': '8.00'
			},{
				'producto': 3,
				'descripcion': 'Cereales',
				'precio': '4.00'
			},
		
		],
		// definimos un usuario y su contrasenya
		usuarios: [
			{usuario: 'admin', contrasena: 'admin'}
		],
		// Definimos datos de facturacion (vacios)
		facturacion: {
			productoSeleccionado: {
				producto: '',
				cantidad: 1
			},
			productosAgregados: []
		},
		// Informacion para controlar el estado del login
		login: {
			usuario: '',
			contrasena: '',
			validado: false,
			mensaje: {
				texto: 'Por favor, introduzca su nombre de usuario y contraseña (admin/admin) para logearse:',
				clase: 'default'
			}
		}
	},
	methods: {
		// Funcion que agrega una linea de pedido de un producto
		agregarLinea: function(){
			var productoSeleccionado = this.facturacion.productoSeleccionado,
			// Comprueba si el producto ya existe en productosAgregados
			// NOTA: En Javascript, find en arrays recibe una función y en ella e1 un elmento del array.
			// Esta funcion	devuelve el primer elemento en el que dicha funcion retorne true
			// mas informacion de find https://www.w3schools.com/jsref/jsref_find.asp
			
			existe = this.facturacion.productosAgregados.find(function(el){
				return el.producto == productoSeleccionado.producto;
			});
			// Si no existe, lo anyade a productosAgregados
			if(!existe){
				this.facturacion.productosAgregados.push({
					producto: productoSeleccionado.producto,
					descripcion: productoSeleccionado.descripcion,
					precio: productoSeleccionado.precio,
					cantidad: productoSeleccionado.cantidad
				});
				// Si ya exisitia, busca el producto agregado y modifica su cantidad
			}else{
				var lineaFactura = this.facturacion.productosAgregados.find(function(el){
					if(el.producto == productoSeleccionado.producto){
						return el.cantidad;
					}
				});

				lineaFactura.cantidad = parseInt(lineaFactura.cantidad) +
					parseInt(productoSeleccionado.cantidad);
			}
		},
		// Funcion que busca informacion de un producto y la anayade a las caracteristicas del producto seleccionado
		infoProductoSeleccionado: function(){
			var producto = this.facturacion.productoSeleccionado.producto;

			if(producto){
				info = this.productos.find(function(linea){
					if(linea.producto == producto){
						return linea;
					}
				});

				this.facturacion.productoSeleccionado.descripcion = info.descripcion;
				this.facturacion.productoSeleccionado.precio = info.precio;
			}
		},
		// Funcion que elimina una linea de pedido basado en su indice
		eliminarLinea: function(indice){
			this.facturacion.productosAgregados.splice(indice, 1);

		},
		// Funcion para validar si el login es correcto
		validarUsuario: function(){
			var login = this.login;

			var elUsuarioExiste = this.usuarios.find(function(el){
				if(el.usuario == login.usuario && el.contrasena == login.contrasena){
					return true;
				}
			});

			if(elUsuarioExiste){
				this.login.validado = true;
				this.login.mensaje.texto = 'Por favor, introduzca su nombre de usuario y contraseña (admin/admin) para logearse:';
				this.login.mensaje.clase = 'default';
			}else{
				this.login.mensaje.texto = 'Acceso denegado. Por favor, verifique su nombre de ' +
				'usuario y/o contraseña y vuelva a intentarlo.';
				this.login.mensaje.clase = 'danger';
			}
		}
	},
	// Funciones computed en Vue2 https://vuejs.org/v2/guide/computed.html
	// Utiles para tratar como variables (aunque es una funcion) y facilitar la claridad en el codigo
	computed: {
		totalLineas: function(){
			var total = 0;

			this.facturacion.productosAgregados.forEach(function(el){
				total += el.cantidad * el.precio;
			});
      return total;
		}
	}
});
