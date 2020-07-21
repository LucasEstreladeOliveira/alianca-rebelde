<template>
  <!-- Grid  -->
  <sui-grid
    :columns="imgPerRow"
    :class="`card-group-${$mq}`"
    style="padding:10px"
  >
    <!-- Iteracao de gifs -->
    <sui-grid-column v-for="gif in gifs" :key="gif.id" v-on:click="toggle(gif)">
      <sui-image
        rounded
        centered
        :src="gif.url"
        style="object-fit: cover; height: calc(40vh); width: calc(40vh)"
      />
    </sui-grid-column>
    <!-- Modal com as informacoes do gif clickado -->
    <Modal v-if="gifs.length !== 0" :config="config" />
    <!-- Observer -->
    <div ref="observer" class="ui container" style="height:1px"></div>
  </sui-grid>
</template>
<script>
import { mapState } from "vuex";
import Modal from "./Modal";

export default {
  name: "Gifs",
  components: {
    Modal
  },
  props: {
    gifs: {
      type: Array,
      default: () => []
    },
    config: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      imgPerRow: 1
    };
  },
  computed: {
    ...mapState({
      currentGif: state => state.currentGif,
      open: state => state.open,
      search: state => state.search
    })
  },
  created() {
    // Cria um evento que observa quando e feito o resize da página
    window.addEventListener("resize", () => {
      this.handleResize();
    });
  },
  mounted() {
    this.handleResize();
    this.handleObserver();
  },
  methods: {
    toggle(gif) {
      // Executa mutation que atribui o gif clickado ao state.currentGif
      this.$store.commit("setCurrentGif", gif);
      // Executa mutation que altera o estado do state.open
      this.$store.commit("setOpen");
    },
    handleResize() {
      // Funcao responsavel por decidir quantas imagens aparecem por coluna dependendo do tamanho da tela
      if (this.$mq == "desktop") {
        this.imgPerRow = 5;
      } else {
        this.imgPerRow = 1;
      }
    },
    handleLoad(search) {
      // Executa mutation que realiza a pesquisa na API do Giphy
      this.$store.commit("enter", { search: search, route: this.$route });
    },
    handleObserver() {
      // Adiciona o observer que realiza uma nova pesquisa sempre que o elemento this.$refs.observer aparece na tela
      this.observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          this.handleLoad(this.search);
        }
      });

      this.observer.observe(this.$refs.observer);
    }
  }
};
</script>
<style scoped lang="postcss">
.card-group-desktop {
  height: calc(96vh - 60px);
}
</style>
