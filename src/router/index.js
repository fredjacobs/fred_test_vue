import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:getKey",
    name: "home",
    component: Home,
    children: [],
  },
  {
    path:"/",
    component: Home
  }
  
];

//How do you add multiple components to a single Route path / element on app.vue

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
