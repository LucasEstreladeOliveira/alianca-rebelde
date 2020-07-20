<template>
  <!-- Card com contendo exibicao do componente da rota atual  -->
  <sui-card>
    <!-- Exibicao do componente da rota atual -->
    <router-view style="padding:15px" />
  </sui-card>
</template>
<script>
export default {
  name: "Display"
};
</script>
