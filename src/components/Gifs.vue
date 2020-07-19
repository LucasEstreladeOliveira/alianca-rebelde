<template>
  <container>
    <sui-card class="ui fluid">
      <Search />
    </sui-card>
    <sui-card
      v-if="gifs.length > 1"
      class="ui fluid"
      :class="`card-overflow-${$mq}`"
      v-infinite-scroll="handleLoad()"
      :infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
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
import { mapState } from "vuex";

export default {
  name: "Gifs",
  components: {
    Search
  },
  data() {
    return {
      imgPerRow: 1
    };
  },
  computed: {
    ...mapState({
      gifs: state => state.gifs,
      busy: state => state.busy
    })
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
    handleResize() {
      console.log(this.$mq);
      if (this.$mq == "desktop") {
        this.imgPerRow = 5;
      } else {
        this.imgPerRow = 1;
      }
    },
    handleLoad() {
      this.$store.commit("enter", "cat");
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
