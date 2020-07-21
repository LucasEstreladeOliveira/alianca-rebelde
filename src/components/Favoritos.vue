<template>
  <div>
    <!-- Card do componente de exibicao de gifs -->
    <sui-card
      class="ui fluid display-card"
      :class="`card-overflow-${$mq}`"
      v-if="verificaGifLength()"
    >
      <!-- Componente de exibicao de gifs -->
      <GifView :gifs="favoritos" />
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
import GifView from "./GifView";
import Busque from "./Busque";
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  components: {
    GifView,
    Busque
  },
  computed: {
    ...mapState({
      favoritos: state => state.favoritos
    })
  },
  created() {
    this.$store.commit("getFavoritos");
  },
  methods: {
    verificaGifLength() {
      return this.favoritos.length !== 0 ? true : false;
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
