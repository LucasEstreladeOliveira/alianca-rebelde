<template>
  <container>
    <sui-card class="ui fluid">
      <Search />
    </sui-card>
    <sui-card class="ui fluid" :class="`card-overflow-${$mq}`">
      <Gifs />
    </sui-card>
  </container>
</template>

<script>
import Search from "./Search";
import Gifs from "./Gifs";
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  components: {
    Search,
    Gifs
  },
  computed: {
    ...mapState({
      gifs: state => state.gifs
    })
  },
  data() {
    return {
      observer: null
    };
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
