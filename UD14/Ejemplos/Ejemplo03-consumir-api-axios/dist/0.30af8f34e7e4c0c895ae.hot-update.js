webpackHotUpdate(0,{34:function(t,e){new Vue({el:"#app",data:{usuarios:[1,2]},mounted:function(){axios.get("https://jsonplaceholder.typicode.com/users").then(t=>this.usuarios=t.data)}})}});