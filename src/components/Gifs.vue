<template>
  <container>
    <sui-card class="ui fluid">
      <Search @search="loadGifs($event)" />
    </sui-card>
    <sui-card class="ui fluid" :class="`card-overflow-${$mq}`">
      <sui-card-group :items-per-row="imgPerRow" :class="`card-group-${$mq}`">
        <sui-card v-for="gif in gifs" :key="gif.id">
          <img :src="gif.images.fixed_height.url" style="object-fit: cover;" />
        </sui-card>
      </sui-card-group>
    </sui-card>
  </container>
</template>

<script>
import Search from "./Search";

export default {
  name: "Gifs",
  components: {
    Search
  },
  data() {
    return {
      gifs: [],
      imgPerRow: 1
    };
  },
  created() {
    window.addEventListener("resize", () => {
      this.handleResize();
    });
  },
  mounted() {
    this.handleResize();
  },
  methods: {
    loadGifs(payload) {
      this.gifs = payload;
    },
    handleResize() {
      console.log(this.$mq);
      if (this.$mq == "desktop") {
        this.imgPerRow = 5;
      } else {
        this.imgPerRow = 1;
      }
    }
  }
};
</script>
<style scoped lang="postcss">
.card-overflow-desktop {
  overflow-y: auto !important;
  overflow-x: hidden !important;
}

.card-group-desktop {
  height: calc(96vh - 60px);
}
</style>
