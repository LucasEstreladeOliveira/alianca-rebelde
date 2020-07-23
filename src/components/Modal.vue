<template>
  <sui-modal v-model="open" size="mini">
    <sui-dimmer :active="active">
      <sui-loader />
    </sui-dimmer>
    <div class="modal">
      <!-- Header do Modal -->
      <sui-modal-header class="modal-header">
        <!-- Tag para favoritar ou excluir o gif -->
        <a
          :class="`ui right corner label ${config.color}`"
          @click="toggleAction()"
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
        <h2 v-else @click="edit = true" class="title">
          {{ currentGif.title }}
        </h2>
      </sui-modal-header>
      <!-- Gif selecionado -->
      <sui-image rounded centered :src="currentGif.url" class="image_modal" />
      <!-- Botao que fecha o modal -->
      <sui-button
        attached="bottom"
        fluid
        positive
        @click="toggle"
        class="buttom-modal"
      >
        <sui-icon name="check" /> OK
      </sui-button>
    </div>
  </sui-modal>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Modal",
  data() {
    return {
      edit: false,
      active: false
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
    ...mapActions({
      updateFavorito: "updateFavoritos"
    }),
    ...mapMutations({
      setOpen: "SET_OPEN"
    }),
    toggle() {
      // Executa a mutation que muda o estado do state.open
      this.setOpen();
    },
    toggleAction() {
      this.active = true;
      this.config.action();
      setTimeout(() => {
        this.active = false;
        this.setOpen();
      }, 1000);
    }
  }
};
</script>

<style scoped>
.modal {
  background: #132b41 !important;
}

.modal-header {
  background-color: #132b41 !important;
  color: white !important;
  padding-top: 20px;
}

.title {
  text-align: center !important;
  color: white !important;
  margin-top: 0px !important;
}

.buttom-modal {
  background-color: #fbbd06 !important;
  color: #132b41 !important;
}

.image_modal {
  object-fit: cover !important;
  height: calc(40vh) !important;
  width: calc(40vh) !important;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
}
</style>
