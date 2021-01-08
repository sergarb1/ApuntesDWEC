<!-- Fichero VUE en formato SFC (Single File Component) -->
<template>
  		<div class="c-inicio">
			<h1 class="text-center">SPA (Single Page Application) creada con Vue</h1>
			<img src="img/vue.png" class="img-responsive center-block">

			<p>
				Aplicación para la gestión de artistas y sus discos.
			</p>

		</div>
</template>

<script>
module.exports = {
  	data(){
		return {
			datos: {}
		}
  }
}
</script>

<style>
</style>