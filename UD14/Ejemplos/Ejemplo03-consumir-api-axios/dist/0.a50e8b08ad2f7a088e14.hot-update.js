webpackHotUpdate(0,{34:function(o,s){new Vue({el:"#app",data:{usuarios:[1,2]},mounted:function(){axios.get("https://jsonplaceholder.typicode.com/users").then((function(o){console.log(this.usuarios),console.log(o.data),this.usuarios=o.data,console.log(this.usuarios)}))}})}});