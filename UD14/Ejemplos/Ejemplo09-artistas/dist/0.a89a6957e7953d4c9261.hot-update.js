webpackHotUpdate(0,[,function(s,t,a){"use strict";a.r(t),a.d(t,"render",(function(){return i})),a.d(t,"staticRenderFns",(function(){return n}));var i=function(){var s=this,t=s.$createElement,a=s._self._c||t;return s.datos?a("div",{staticClass:"c-artistas"},[a("h1",{staticClass:"text-right"},[s._v(s._s(s.datos.nombre))]),s._v(" "),a("div",{staticClass:"thumbnail"},[a("img",{staticClass:"img-responsive foto-artista",attrs:{src:s.datos.imagen}}),s._v(" "),s.datos.descripcion?a("div",{staticClass:"caption"},[a("p",[s._v(s._s(s.datos.descripcion))])]):s._e()]),s._v(" "),a("h3",[s._v("\n    Discografía "),a("small",[s._v(s._s(s.datos.discos.length))])]),s._v(" "),s.datos.discos.length?a("ul",{staticClass:"list-unstyled"},s._l(s.datos.discos,(function(t){return a("li",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("h3",[s._v("\n            "+s._s(t.nombre)+" "),a("small",[s._v(s._s(t.lanzamiento))])])])]),s._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("img",{staticClass:"img-responsive portada-disco",attrs:{src:t.portada,alt:t.nombre}})]),s._v(" "),a("div",{staticClass:"col-sm-8"},[t.canciones.length?a("ol",s._l(t.canciones,(function(t){return a("li",{class:{"text-muted":!t.nombre}},[s._v("\n              "+s._s(t.nombre||"Nombre desconocido")+"\n              "),a("span",{staticClass:"label label-default pull-right"},[s._v("\n                "+s._s(t.duracion||"00:00")+"\n              ")])])})),0):a("div",[a("span",{staticClass:"label label-danger"},[s._v("Ooops!")]),s._v("\n            Las canciones de este disco no están disponibles.\n          ")])])]),s._v(" "),a("hr")])})),0):a("div",[a("span",{staticClass:"label label-danger"},[s._v("Ooops!")]),s._v("\n    Los discos de este artista no están disponibles en el archivo de datos.\n  ")])]):s._e()},n=[];i._withStripped=!0}]);