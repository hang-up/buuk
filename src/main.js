import App from './App.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './js/data/store'
const bootstrap = require('./js/bootstrap/autoload')
require('./sass/app.scss')
require(`./sass/themes/${bootstrap.theme}`)

Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: bootstrap.routes
})

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})

