import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Expires: new Date()
  },
  getters: {
    getExpires(state) {
      return state.Expires
    }
  },
  mutations: {
    updateExpires(state, payload) {
      state.Expires = payload.Expires;
    }
  },
  actions: {
    updateExpires({
      commit
    }, payload) {
      commit('updateExpires', payload);
    }
  }
})
