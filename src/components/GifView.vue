<template>
  <sui-card class="ui fluid display-card" :class="`card-overflow-${$mq}`">
    <Gifs :gifs="gifs" :config="config" />
  </sui-card>
</template>

<script>
import Gifs from "./Gifs";

export default {
  components: {
    Gifs
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
  }
};
</script>

<style lang="postcss" scoped>
.card-overflow-desktop {
  overflow-y: auto !important;
  overflow-x: hidden !important;
}
</style>
