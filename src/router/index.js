import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Wiki from "../views/Wiki.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter(to,from,next) {
      if(store.getters.idToken) {
        next("/wiki");
        console.log("wikiにすすむ");
      } else {
        next();
      }
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/wiki",
    name: "wiki",
    component: Wiki,
    beforeEnter(to, from, next) {
      if(store.getters.idToken) {
        next();
      } else {
        next("/");
        console.log("まだログインしてないよ！");
      }
    }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/Wiki.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
