import Vue from 'vue'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

sync(store, router)

const app = new Vue({
  router,
  store,
  mounted() {
    this.$vuetify.init();
  },
  ...App
})

Vue.use(Vuetify);
Vue.use(VueResource);

export { app, router, store }
