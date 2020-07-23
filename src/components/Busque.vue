<template>
  <sui-card class="ui fluid display-card" :class="`card-overflow-${$mq}`">
    <h2
      style="color:#fbbd06
        padding-bottom: 100px"
    >
      Procure novos Gifs e que a força esteja com você
    </h2>
    <sui-image :src="background" centered />
  </sui-card>
</template>

<script>
import bb8 from "../assets/bb8.webp";
export default {
  data() {
    return {
      background: bb8
    };
  }
};
</script>

<style lang="postcss" scoped>
.card-overflow-desktop {
  overflow-y: auto !important;
  overflow-x: hidden !important;
}
</style>
