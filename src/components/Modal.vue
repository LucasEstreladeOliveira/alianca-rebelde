<template>
  <sui-modal v-model="open" size="mini">
    <!-- Titulo do Gif selecionado -->
    <sui-modal-header>
      <p style="text-align:center">{{ currentGif.title }}</p>
    </sui-modal-header>
    <!-- Gif selecionado -->
    <sui-image
      rounded
      centered
      :src="currentGif.images.fixed_height.url"
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
  computed: {
    ...mapState({
      open: state => state.open,
      currentGif: state => state.currentGif
    })
  },
  methods: {
    toggle() {
      // Executa a mutation que muda o estado do state.open
      this.$store.commit("setOpen");
    }
  }
};
</script>

<style lang="scss" scoped></style>
