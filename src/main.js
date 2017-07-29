import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './js/store'
require('materialize-css/dist/js/materialize.min')


// Load bootstrap
import { routes } from './js/bootstrap/routes'

// Load the chosen theme.
require('./sass/app.scss')

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
    routes: routes()
})

new Vue({
  el: '#app',
    store,
    router,
    render: h => h(App)
});
