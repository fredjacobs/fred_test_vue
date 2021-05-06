  
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
  },
  actions: {},
  modules: {},
};
