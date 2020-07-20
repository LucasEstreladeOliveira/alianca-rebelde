<template>
  <div class="ui transparent fluid input container">
    <input
      type="text"
      placeholder="Search..."
      @keyup.enter="enter(search)"
      v-model="search"
    />
    <button class="ui basic inverted icon button" @click="enter(search)">
      <i class="search icon black"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    enter(search) {
      // Executa mutation que atribui a informacao digitada na pesquisa ao state.search
      this.$store.commit("setSearch", search);
    }
  }
};
</script>
