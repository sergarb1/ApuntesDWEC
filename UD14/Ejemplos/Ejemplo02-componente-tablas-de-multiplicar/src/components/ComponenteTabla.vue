<!-- Fichero VUE en formato SFC (Single File Component) -->
<template>
  <div class="c-tablas">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Tablas de multiplicar</h3>
      </div>
      <div class="panel-body">
        <form>
          <div class="form-group">
            <label for="num" class="control-label"
              >Introduzca un n&uacute;mero:</label
            >
            <!-- Usamos v-model para enlazar el input a datos https://vuejs.org/v2/guide/forms.html -->
            <input
              type="number"
              id="num"
              class="form-control"
              v-model="numero"
              autofocus
            />
          </div>
        </form>
        <!-- v-show, similar a usar el Display de CSS (se renderiza pero se ve o no se ve) https://vuejs.org/v2/guide/conditional.html#v-show -->
        <table
          class="table table-bordered table-hover table-condensed"
          v-show="numero"
        >
          <tbody>
            <!-- v-for con un rango https://vuejs.org/v2/guide/list.html#v-for-with-a-Range -->
            <tr v-for="valor in 10" :key="valor" class="text-center">
              <td>{{ numero }}</td>
              <td>x</td>
              <td>{{ valor }}</td>
              <td>=</td>
              <td>{{ numero * valor }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      numero: "",
    };
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>