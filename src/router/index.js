import Vue from "vue";
import VueRouter from "vue-router";

// Importando views e componetes
import Dashboard from "../components/Dashboard.vue";
import Favoritos from "../components/Favoritos.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    icon: "columns"
  },
  {
    path: "/favoritos",
    name: "Favoritos",
    component: Favoritos,
    icon: "star"
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
