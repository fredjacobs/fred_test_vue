import Vue from "vue";
import Vuex from "vuex";
import color_data from "@/store/modules/color_data.js";

Vue.use(Vuex);

     
export default new Vuex.Store({
  state: {
<<<<<<< HEAD
    name: "",
    color: "",
  },
  mutations: {
    updateFormOne(state, payload) {
      state.name = payload.name;
      state.color = payload.color;
    },
  },
  actions: {},
  modules: {
    color_data: color_data,
=======

    
    name:'',
    color:'',
  },
  mutations: {
    updateFormOne(state, payload){
      
      state.name = payload.name;
      state.color = payload.color;
    }
  },
  actions: {},
  modules: {
    color_data:color_data,
>>>>>>> 460656e6c9c1e7c518db9d47fb1395b9d1de84e6
  },
});
