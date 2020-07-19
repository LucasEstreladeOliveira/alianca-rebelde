import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SuiVue from "semantic-ui-vue";
import VueMq from "vue-mq";
import infiniteScroll from "vue-infinite-scroll";
import "semantic-ui-css/semantic.min.css";

Vue.config.productionTip = false;
Vue.use(SuiVue);
Vue.use(infiniteScroll);

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    laptop: 1250,
    desktop: Infinity
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
