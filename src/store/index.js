import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse:false,
    userName:''
  },
  mutations: {
    SetisCollapse(state,val){
      state.isCollapse=val
    },
  },
  actions: {
  },
  modules: {
  }
})
