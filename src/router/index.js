import Vue from "vue";
import VueRouter from "vue-router";
import ContentHeader from "@/components/ContentHeader.vue";
import TestRoutesPage from "@/components/TestRoutesPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ContentHeader,
    children: [],
  },
  {
    path: "/test",
    name: "test",
    component: TestRoutesPage,
  },
];

//How do you add multiple components to a single Route path / element on app.vue

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
