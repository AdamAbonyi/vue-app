import './promise-polyfill'
import { app } from './app'
import Vue from 'vue'
import Vuetify from 'vuetify'
import('../node_modules/vuetify/dist/vuetify.min.css')

// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

Vue.use(Vuetify)
app.$mount('#app')
