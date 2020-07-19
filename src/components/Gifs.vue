<template>
  <div>
    <Search @search="loadGifs($event)" />
    <container class="ui container">
      <sui-card-group :items-per-row="5">
        <sui-card v-for="gif in gifs" :key="gif.id">
          <sui-reveal animated="move">
            <sui-reveal-content visible>
              <sui-image
                :src="gif.images.fixed_height.url"
                style=" height:150px !important; width: 100% !important"
              />
            </sui-reveal-content>
            <sui-reveal-content hidden> </sui-reveal-content>
          </sui-reveal>
        </sui-card>
      </sui-card-group>
    </container>
  </div>
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
      gifs: []
    };
  },
  methods: {
    loadGifs(payload) {
      this.gifs = payload;
    }
  }
};
</script>

<style lang="scss" scoped></style>
