<template>
  <div id="app">
    <Home v-if="!login" />
    <router-view v-if="login" />
  </div>
</template>
<script>
import Home from "./views/Home";
import backgroundImage from "./assets/background.jpg";

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
    window.addEventListener("resize", () => {
      this.verifyOverflow();
    });
  },
  mounted() {
    this.verifyRoute(this.$route);
    this.verifyOverflow();
  },
  watch: {
    $route(newRoute) {
      this.verifyRoute(newRoute);
    }
  },
  methods: {
    verifyRoute(route) {
      if (route.name != "Login") {
        this.login = false;
        document.body.style.backgroundImage = `url("${backgroundImage}")`;
      } else {
        this.login = true;
        document.body.style.backgroundImage = `url("https://i.giphy.com/media/l0MYJAzu5RTVSGeiY/giphy.webp")`;
        document.body.style.backgroundSize = "100% 100%";
      }
    },
    verifyOverflow() {
      if (this.$mq == "desktop") {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
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
