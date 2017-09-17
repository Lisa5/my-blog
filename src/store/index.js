// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js'

Vue.use(Vuex)

const state = {
  user: {},
  isLogon: false
}
const store = new Vuex.Store({
  state,
  actions: {},
  mutations: {
    logon (state, payload) {
      state.user += payload.user
      state.isLogon = true
    }
  },
  getters,
  modules: {}
})

export default store
