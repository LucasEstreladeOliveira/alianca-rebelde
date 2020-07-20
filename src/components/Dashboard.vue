<template>
  <div>
    <!-- Card do componente de busca -->
    <sui-card class="ui fluid search-card">
      <!-- Componente de busca -->
      <Search />
    </sui-card>
    <!-- Card do componente de exibicao de gifs -->
    <sui-card
      class="ui fluid display-card"
      :class="`card-overflow-${$mq}`"
      v-if="verificaGifLength()"
    >
      <!-- Componente de exibicao de gifs -->
      <Gifs />
    </sui-card>
    <sui-card
      class="ui fluid display-card"
      :class="`card-overflow-${$mq}`"
      v-if="!verificaGifLength()"
    >
      <!-- Componente de exibicao de gifs -->
      <Busque />
    </sui-card>
  </div>
</template>
<script>
import Search from "./Search";
import Gifs from "./Gifs";
import Busque from "./Busque";
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  components: {
    Search,
    Gifs,
    Busque
  },
  computed: {
    ...mapState({
      gifs: state => state.gifs
    })
  },
  methods: {
    verificaGifLength() {
      return this.gifs.length !== 0 ? true : false;
    }
  }
};
</script>
<style scoped lang="postcss">
.card-overflow-desktop {
  overflow-y: auto !important;
  overflow-x: hidden !important;
}

.search-card {
  box-shadow: none !important;
  background-color: #fbbd06 !important;
}

.display-card {
  background-color: #132b41 !important;
  box-shadow: none !important;
}
</style>
