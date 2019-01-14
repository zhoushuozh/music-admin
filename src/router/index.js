import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      component: NotFound
    },
    {
      path: '/',
      component: Home
    },
    {
      path: "/login",
      meta: {
        title: "登录"
      },
      component: Login
    }
  ]
});