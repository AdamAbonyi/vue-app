import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  link: ""
}

const mutations = {
  SET (state) {
    state.link = state
  }
}

const actions = {
  // incrementAsync ({ commit }) {
  //   setTimeout(() => {
  //     commit('INCREMENT')
  //   }, 200)
  // }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
