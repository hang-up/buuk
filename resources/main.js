import App from './App.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store.js'
require('./sass/app.scss')

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
    { path: '/', component: require('./components/article-container-intro.vue') },
    { path: '/:article', component: require('./components/article-container.vue')  }
]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
