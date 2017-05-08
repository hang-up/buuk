import App from './App.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store.js'
require('./sass/app.scss')
require('./components/utils/themify').default.mounted()

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
    { path: '/', component: require('./components/articles/article-container-intro.vue') },
    { path: '/:article', component: require('./components/articles/article-container.vue')  }
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
