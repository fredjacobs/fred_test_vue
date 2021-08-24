import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import CustomForm from "@/components/CustomForm.vue";
import Client from "@/views/Client.vue";
import Notes from "@/views/Notes.vue";
import TestingStyling from "@/components/TestingStyling.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import PublishSubscribeTest from "@/views/PublishSubscribeTest.vue";
import ContactCreate from "@/components/ContactCreate.vue";
import ObjectNinjaDojo from "@/components/ObjectNinjaDojo.vue";
import FormCreate from "@/components/FormCreate";
//import { component } from "vue/types/umd";

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
    path: "/ondojo",
    name: "ondojo",
    component: ObjectNinjaDojo,
  },
  {
    path: "/client",
    name: "clientPage",
    component: Client,
  },
  {
    path: "/notes",
    name: "notes",
    component: Notes,
  },
  {
    path: "/testingstyling",
    name: "testingstyling",
    component: TestingStyling,
  },
  {
    path: "*",
    component: PageNotFound,
  },
  {
    path: "/contact-create",
    name: "create",
    component: ContactCreate,
  },
  {
    path: "/form-create",
    name: "formcreate",
    component: FormCreate,
  },
  {
    path: "/pst",
    name: "pst",
    component: PublishSubscribeTest,
  },
];

//How do you add multiple components to a single Route path / element on app.vue

const router = new VueRouter({
  routes,
});

export default router;
