<template>
  <div id="app">
    <Home v-if="!login" />
    <router-view v-if="login" />
  </div>
</template>
<script>
import Home from "./views/Home";

export default {
  components: {
    Home
  },
  data() {
    return {
      login: true
    };
  },
  created() {
    this.verifyRoute(this.$route);
  },
  watch: {
    $route(newRoute) {
      console.log(newRoute.name);
      this.verifyRoute(newRoute);
    }
  },
  methods: {
    verifyRoute(route) {
      if (route.name != "Login") {
        this.login = false;
        document.body.style.backgroundImage = `url("https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-25.jpg")`;
      } else {
        this.login = true;
        document.body.style.backgroundImage = `url("https://i.giphy.com/media/l0MYJAzu5RTVSGeiY/giphy.webp")`;
        document.body.style.backgroundSize = "100% 100%";
      }
    }
  }
};
</script>
<style>
#app {
  text-align: center;
}
</style>
