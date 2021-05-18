import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import CustomForm from "@/components/CustomForm.vue";
import Client from "@/views/Client.vue";
import Notes from "@/views/Notes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home/:getKey",
    name: "home",
    component: Home,
    children: [],
  },
  {
    path: "/",
    redirect: "/home/clientselect",
  },
  {
    path: "/form",
    name: "customForm",
    component: CustomForm,
  },
  {
    path: "/client",
    name: "clientPage",
    component: Client,
  },
  {
    path:"/notes",
    name:"notes",
    component: Notes,

  }
];

//How do you add multiple components to a single Route path / element on app.vue

const router = new VueRouter({
  routes,
});

export default router;
