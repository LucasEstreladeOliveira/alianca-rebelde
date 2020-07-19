<template>
  <container class="ui transparent fluid input container">
    <input
      type="text"
      placeholder="Search..."
      @keyup.enter="enter(search)"
      v-model="search"
    />
    <button class="ui basic inverted icon button" @click="enter(search)">
      <i class="search icon black"></i>
    </button>
  </container>
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
      this.$store.commit("enter", search);
    }
  }
};
</script>
