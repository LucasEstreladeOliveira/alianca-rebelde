<template>
  <div>
    <!-- Card do componente de busca -->
    <sui-card class="ui fluid">
      <!-- Componente de busca -->
      <Search />
    </sui-card>
    <!-- Card do componente de exibicao de gifs -->
    <sui-card class="ui fluid" :class="`card-overflow-${$mq}`">
      <!-- Componente de exibicao de gifs -->
      <Gifs />
    </sui-card>
  </div>
</template>
<script>
import Search from "./Search";
import Gifs from "./Gifs";

export default {
  name: "Dashboard",
  components: {
    Search,
    Gifs
  }
};
</script>
<style scoped lang="postcss">
.card-overflow-desktop {
  overflow-y: auto !important;
  overflow-x: hidden !important;
}

.card-group-desktop {
  height: calc(96vh - 60px);
}
</style>
