<template>
  <div>
    <!-- Card do componente de busca -->
    <sui-card class="ui fluid search-card">
      <!-- Componente de busca -->
      <Search />
    </sui-card>
    <!-- Componente de exibicao de gifs -->
    <GifView v-if="verificaGifLength()" :gifs="gifs" />
    <!-- Componente de exibicao de gifs -->
    <Busque v-if="!verificaGifLength()" />
  </div>
</template>
<script>
import Search from "./Search";
import Busque from "./Busque";
import GifView from "./GifView";
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  components: {
    Search,
    GifView,
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
