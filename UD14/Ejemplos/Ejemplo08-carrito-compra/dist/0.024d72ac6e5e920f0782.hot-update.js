webpackHotUpdate(0,{35:function(o,a){Number.prototype.formatMoney=function(o,a,r){var i=this,t=(o=isNaN(o=Math.abs(o))?2:o,a=null==a?".":a,r=null==r?",":r,i<0?"-":""),c=String(parseInt(i=Math.abs(Number(i)||0).toFixed(o))),n=(n=c.length)>3?n%3:0;return t+(n?c.substr(0,n)+r:"")+c.substr(n).replace(/(\d{3})(?=\d)/g,"$1"+r)+(o?a+Math.abs(i-c).toFixed(o).slice(2):"")};new Vue({el:"#app",data:{productos:[{producto:1,descripcion:"Galletas",precio:"5.30"},{producto:2,descripcion:"Leche",precio:"8.00"},{producto:3,descripcion:"Cereales",precio:"4.00"}],usuarios:[{usuario:"admin",contrasena:"admin"}],facturacion:{productoSeleccionado:{producto:"",cantidad:1},productosAgregados:[]},login:{usuario:"",contrasena:"",validado:!1,mensaje:{texto:"Por favor, introduzca su nombre de usuario y contraseña para logearse:",clase:"default"}}},methods:{agregarLinea:function(){var o=this.facturacion.productoSeleccionado;if(this.facturacion.productosAgregados.find((function(a){return a.producto==o.producto}))){var a=this.facturacion.productosAgregados.find((function(a){if(a.producto==o.producto)return a.cantidad}));a.cantidad=parseInt(a.cantidad)+parseInt(o.cantidad)}else this.facturacion.productosAgregados.push({producto:o.producto,descripcion:o.descripcion,precio:o.precio,cantidad:o.cantidad})},infoProductoSeleccionado:function(){var o=this.facturacion.productoSeleccionado.producto;o&&(info=this.productos.find((function(a){if(a.producto==o)return a})),this.facturacion.productoSeleccionado.descripcion=info.descripcion,this.facturacion.productoSeleccionado.precio=info.precio)},eliminarLinea:function(o){this.facturacion.productosAgregados.splice(o,1)},validarUsuario:function(){var o=this.login;this.usuarios.find((function(a){if(a.usuario==o.usuario&&a.contrasena==o.contrasena)return!0}))?(this.login.validado=!0,this.login.mensaje.texto="Por favor, introduzca su nombre de usuario y contraseña para ingresar:",this.login.mensaje.clase="default"):(this.login.mensaje.texto="Acceso denegado. Por favor, verifique su nombre de usuario y/o contraseña y vuelva a intentarlo.",this.login.mensaje.clase="danger")}},computed:{totalLineas:function(){var o=0;return this.facturacion.productosAgregados.forEach((function(a){o+=a.cantidad*a.precio})),o.formatMoney(2,".",",")}}})}});