import Vue from "vue";
import Vuex from "vuex";
import color_data from "@/store/modules/color_data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    color: "",
    randomNumber: null,
    currentClient: "John",
    myData: [
      {
        acc: "Freddie Kruger",
        description: "Private Home Flooring Job",
      },
      {
        acc: "John Cleese",
        description: "Kitchen Rebuild",
      },
      {
        acc: "Bruce Lee",
        description: "Shower Installation",
      },
    ],
  },
  mutations: {
    updateFormOne(state, payload) {
      state.name = payload.name;
      state.color = payload.color;
    },
    newNumber(state, payload) {
      state.randomNumber = payload;
    },
    updateCurrentClient(state, payload) {
      state.currentClient = payload;
    },
  },
  actions: {},
  modules: {
    color_data: color_data,
  },
});
