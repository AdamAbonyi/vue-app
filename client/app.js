import Vue from 'vue'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'

sync(store, router)

const app = new Vue({
  router,
  store,
  mounted() {
    this.$vuetify.init();
  },
  ...App
})

Vue.use(Vuetify)

export { app, router, store }
