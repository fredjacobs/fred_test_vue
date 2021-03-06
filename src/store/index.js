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
    isDarkTheme: "",
    myNumber: null,
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
    formFields: [],
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
    setErrorMessage(state, payload) {
      console.log("ERROR");
    },
    updateTheme(state, payload) {
      state.isDarkTheme = payload;
    },
    addFormFields(state, payload) {
      state.formFields.push(payload);
      console.log(state.formFields);
    },
    updateFormField(state, payload) {
      const id = payload.id;
      const label = payload.label;
      state.formFields.forEach((field, i) => {
        if (field.field_id === id) {
          field.field_label = label;
        }
      });
    },
    clearFields(state) {
      state.formFields = [];
    },
  },
  actions: {},
  modules: {
    color_data: color_data,
  },
});
