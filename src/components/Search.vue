<template>
  <div
    class="ui transparent fluid input container"
    style="background-color:#fbbd06"
  >
    <input
      type="text"
      placeholder="Search..."
      @keyup.enter="enter(search)"
      v-model="search"
      class="input"
    />
    <button
      class="ui basic inverted icon button"
      @click="enter(search)"
      style="box-shadow: none !important;"
    >
      <i class="search icon black"></i>
    </button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    ...mapActions({
      verifySearch: "verifySearch"
    }),
    enter(search) {
      // Executa mutation que atribui a informacao digitada na pesquisa ao state.search
      this.verifySearch({ search: search, route: this.$route });
    }
  }
};
</script>
<style scoped>
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #132b41 !important;
  font-weight: bold;
}

.input {
  margin: 5px !important;
}
</style>
