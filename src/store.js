import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     splash: true

  },
  mutations: {
    setSplash(state, view){
      state.splash=view
    }
  },
  actions: {

  },
  getters: {
    getSplash(state){
      return state.splash
    }
  }
})
