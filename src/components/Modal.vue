<template>
  <sui-modal v-model="open" size="mini">
    <!-- Titulo do Gif selecionado -->
    <sui-modal-header>
      <a
        :class="`ui right corner label ${config.color}`"
        @click="config.action()"
      >
        <sui-icon :name="config.name" />
      </a>
      <div class="ui input fluid" v-if="edit">
        <input
          type="text"
          :placeholder="`${currentGif.title}`"
          v-model="currentGif.title"
          @blur="
            edit = false;
            updateFavorito(currentGif);
          "
          @keyup.enter="
            edit = false;
            updateFavorito(currentGif);
          "
        />
      </div>
      <p v-else @click="edit = true" style="text-align:center">
        {{ currentGif.title }}
      </p>
    </sui-modal-header>
    <!-- Gif selecionado -->
    <sui-image
      rounded
      centered
      :src="currentGif.url"
      style="object-fit: cover; height: calc(40vh); width: calc(40vh); margin-top: 10px; margin-bottom: 10px"
    />
    <!-- Botao que fecha o modal -->
    <sui-button attached="bottom" fluid positive @click="toggle">
      <sui-icon name="check" /> OK
    </sui-button>
  </sui-modal>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Modal",
  data() {
    return {
      edit: false
    };
  },
  computed: {
    ...mapState({
      open: state => state.open,
      currentGif: state => state.currentGif
    })
  },
  props: {
    config: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    toggle() {
      // Executa a mutation que muda o estado do state.open
      this.$store.commit("setOpen");
    },
    updateFavorito(gif) {
      this.$store.commit("updateFavorito", gif);
    }
  }
};
</script>

<style lang="scss" scoped></style>
