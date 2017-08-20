// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {}
  },
  actions: {},
  mutations: {
    logon (state, payload) {
      state.user += payload.user
    }
  },
  getters: {},
  modules: {}
})

export default store
