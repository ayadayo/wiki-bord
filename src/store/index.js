import { createStore } from "vuex";

export default createStore({
  state: {
    idToken:null
  },
  getters: {
    idToken: state => {
      return state.idToken
    }
  },
  mutations: {
    updateToken: function(state,idToken){
      state.idToken = idToken
    }
  },
  actions: {},
  modules: {},
});
