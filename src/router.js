import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Success from "./views/Success.vue";
import Err from "./views/Error.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/success",
      name: "success",
      component: Success
    },
    {
      path: "/error",
      name: "error",
      component: Err
    }
  ]
});
