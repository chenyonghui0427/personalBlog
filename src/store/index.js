import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      currentNav:JSON.parse(sessionStorage.getItem('currentNav')) ? JSON.parse(sessionStorage.getItem('currentNav')) : "1"
  },
  mutations: {
      SELECT_NAV(state,value){
        state.currentNav = value.currentNav;
        sessionStorage.setItem('currentNav', JSON.stringify(value.currentNav));
      }
  },
  actions: {
  },
  modules: {
  }
})
