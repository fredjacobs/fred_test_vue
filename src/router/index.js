import Vue from "vue";
import VueRouter from "vue-router";
import ContentHeader from "@/components/ContentHeader.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name:"home",
    component: ContentHeader,
    children: []
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
