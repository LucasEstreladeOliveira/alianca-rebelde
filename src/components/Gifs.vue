<template>
  <sui-card-group :items-per-row="imgPerRow" :class="`card-group-${$mq}`">
    <sui-card v-for="gif in gifs" :key="gif.id">
      <img :src="gif.images.fixed_height.url" style="object-fit: cover;" />
    </sui-card>
    <div ref="observer" class="ui container" style="height:1px"></div>
  </sui-card-group>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Gifs",
  data() {
    return {
      imgPerRow: 1
    };
  },
  computed: {
    ...mapState({
      gifs: state => state.gifs
    })
  },
  created() {
    window.addEventListener("resize", () => {
      this.handleResize();
    });
  },
  mounted() {
    this.handleResize();
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$store.commit("enter", "cat");
        console.log("oberserver", this.$refs.observer);
      }
    });

    this.observer.observe(this.$refs.observer);
    console.log(this.$refs.observer);
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
.card-group-desktop {
  height: calc(96vh - 60px);
}
</style>
