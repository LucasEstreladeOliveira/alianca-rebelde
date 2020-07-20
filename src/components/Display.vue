<template>
  <!-- Card com contendo exibicao do componente da rota atual  -->
  <sui-card class="background">
    <!-- Exibicao do componente da rota atual -->
    <router-view class="view" />
  </sui-card>
</template>
<script>
export default {
  name: "Display"
};
</script>
<style scoped>
.background {
  background-color: #132b41 !important;
  box-shadow: none !important;
}

.view {
  padding: 15px !important;
}
</style>
