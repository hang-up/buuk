import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './js/store'
require('materialize-css/dist/js/materialize.min')


// Load bootstrap
import { theme, routes } from './js/bootstrap/autoload'

// Load the chosen theme.
require('./sass/app.scss')
require(`./sass/themes/${theme}`)

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
    routes
})

new Vue({
  el: '#app',
    store,
    router,
    render: h => h(App)
});
