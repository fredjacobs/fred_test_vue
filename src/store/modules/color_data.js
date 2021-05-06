<<<<<<< HEAD
export default {
  namespaced: true,
  state: {
    name: "",
    color: "",
  },
  mutations: {
    updateColor(state, payload) {
      state.name = payload.name;
      state.color = payload.color;
    },
=======
  
export default {
  namespaced:true,
  state: {

    
    name:'',
    color:'',
  },
  mutations: {
    updateColor(state, payload){
      
      state.name = payload.name;
      state.color = payload.color;
    }
>>>>>>> 460656e6c9c1e7c518db9d47fb1395b9d1de84e6
  },
  actions: {},
  modules: {},
};
