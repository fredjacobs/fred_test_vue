import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home/:getKey",
    name: "home",
    component: Home,
    children: [],
  },
  {
    path:"/",
    redirect: "/home/clientselect"
  }
  
];

//How do you add multiple components to a single Route path / element on app.vue

const router = new VueRouter({

  routes,
});

export default router;
