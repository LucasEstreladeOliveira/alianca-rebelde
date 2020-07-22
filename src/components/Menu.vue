<template>
  <sui-card class="card-background">
    <div style="padding-top: 20px">
      <sui-image
        src="https://avatars2.githubusercontent.com/u/48110280?s=400&v=4"
        size="tiny"
        circular
        centered
      />
    </div>
    <h3 class="id">
      {{ login.email }}
    </h3>
    <div :class="`menu-buttom-group-${$mq}`">
      <router-link
        :to="route.path"
        v-for="route in routes"
        :key="route.name"
        :class="`menu-buttom-${$mq} `"
      >
        <sui-icon
          :name="route.icon"
          class="ui large"
          link
          bordered
          inverted
          circular
          color="yellow"
          floated="left"
          :style="{ color: activeColor(route) }"
        ></sui-icon>
        <a
          is="sui-label"
          color="yellow"
          size="large"
          v-if="$mq === 'desktop'"
          tag
          style="color:black"
          :style="{ color: activeColor(route) }"
          >{{ route.name }}</a
        >
      </router-link>
    </div>
  </sui-card>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Menu",
  computed: {
    ...mapState({
      login: state => state.login
    })
  },
  data() {
    return {
      routes: []
    };
  },
  created() {
    if (this.login === {}) {
      this.$router.push("/login");
    }
  },
  mounted() {
    this.routes = this.verifyIfLogin();
  },
  methods: {
    activeColor(route) {
      let color = "";
      if (this.$route.name === route.name) {
        color = "white !important";
      } else {
        color = "";
      }

      return color;
    },
    verifyIfLogin() {
      let routes = this.$router.options.routes.map(route => {
        return route.name !== "Login" ? route : {};
      });

      return routes;
    }
  }
};
</script>
<style scoped lang="postcss">
.menu-buttom-desktop {
  text-align: left;
  padding-left: 20px;
  padding-top: 6px;
  padding-bottom: 6px;
}
.menu-buttom-mobile {
  padding-left: 5px;
  padding-right: 5px;
}
.menu-buttom-laptop {
  padding-left: 5px;
  padding-right: 5px;
}
.menu-buttom-group-desktop {
  display: contents;
}
.menu-buttom-group-laptop {
  padding-bottom: 2vh;
}
.menu-buttom-group-mobile {
  padding-bottom: 2vh;
}

.ui.tag.label:after {
  background-color: #132b41 !important;
}

.ui.yellow.label {
  color: #132b41 !important;
}

i.inverted.bordered.yellow.icon,
i.inverted.circular.yellow.icon {
  color: #132b41 !important;
}

.card-background {
  background-color: #132b41 !important;
  box-shadow: none !important;
}

.id {
  color: #fbbd06;
}

.active {
  color: white !important;
}
</style>
