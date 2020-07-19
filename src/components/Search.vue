<template>
  <div>
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
      console.log("deu enter!");
      const apiKey = "U1kXvwFPKHwhxpdFPIppkTAzvnOJoUZE";
      const giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${search}&rating=g&api_key=${apiKey}`;

      fetch(giphyApiUrl)
        .then(data => {
          return data.json();
        })
        .then(json => {
          console.log(json.data);
          this.$emit("search", json.data);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
