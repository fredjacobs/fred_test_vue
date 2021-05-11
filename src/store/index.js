import Vue from "vue";
import Vuex from "vuex";
import color_data from "@/store/modules/color_data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    color: "",
    randomNumber: null,
  },
  mutations: {
    updateFormOne(state, payload) {
      state.name = payload.name;
      state.color = payload.color;
    },
    newNumber(state, payload){
      state.randomNumber = payload;
    }
  },
  actions: {},
  modules: {
    color_data: color_data,
  },
});
