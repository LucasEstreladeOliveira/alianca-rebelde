<template>
  <div>
    <!-- Card do componente de exibicao de gifs -->
    <sui-card
      class="ui fluid display-card"
      :class="`card-overflow-${$mq}`"
      v-if="verificaGifLength()"
    >
      <!-- Componente de exibicao de gifs -->
      <GifView :gifs="favoritos" :config="configModal" />
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
import { mapState, mapActions } from "vuex";

export default {
  name: "Dashboard",
  components: {
    GifView,
    Busque
  },
  computed: {
    ...mapState({
      favoritos: state => state.favoritos,
      currentGif: state => state.currentGif
    })
  },
  data() {
    return {
      configModal: {}
    };
  },
  created() {
    this.configModal = {
      name: "close icon",
      color: "red",
      action: this.remove
    };
  },
  mounted() {
    this.getFavoritos();
  },
  methods: {
    ...mapActions({
      getFavoritos: "getFavoritos",
      removeFavorito: "removeFavorito"
    }),
    verificaGifLength() {
      return this.favoritos.length !== 0 ? true : false;
    },
    remove() {
      this.removeFavorito(this.currentGif.id);
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
