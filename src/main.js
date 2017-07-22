import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import bootstrap from './js/bootstrap/autoload'
import './sass/app.scss'

// Load the chosen theme.
require(`./sass/themes/${bootstrap.theme}`)

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
    routes: bootstrap.routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
    store,
    router,
    render: h => h(App)
});
