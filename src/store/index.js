import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import color_data from "@/store/modules/color_data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    color: "",
    randomNumber: null,
    currentClient: "",
    isDarkTheme:false,
    myNumber:null,
    myData: [
      {
        acc: "Freddie Kruger",
        description: "Private Home Flooring Job",
        quote: 20000,
      },
      {
        acc: "John Cleese",
        description: null,
        quote: 0,
      },
      {
        acc: "Bruce Lee",
        description: "Shower Installation",
        quote: 12000,
      },
      {
        acc: "Peter Seller",
        description: "Kitchen Overhual",
        quote: 5000,
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
    increment(state){
      state.myNumber++;
    }
   
  },
  actions: {},
  modules: {
    color_data: color_data,
  },
});
