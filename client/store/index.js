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
  requestSubredditContent ({commit}, param1) {
    alert(`Vuex Action called with param ${param1}`);  
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
