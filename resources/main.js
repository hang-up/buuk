import App from './App.vue'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store.js'
require('./sass/app.scss')
require('./components/utils/themify').default.mounted()
const options = require('../manifest.json').options

Vue.use(Vuex)
Vue.use(VueRouter)

/*
    This will be moved into routes.js in 3.x
 */
let routes = [
    {
        path: '/:article',
        name: 'article',
        component: require('./components/articles/article-container.vue')
    }
]
if (options.introduction && options.introduction !== null) {
    routes.push({
        path: '/',
        redirect: `${options.introduction}`,
        component: require('./components/articles/article-container.vue')})
}
else {
    routes.push({ path: '/', component: require('./components/articles/article-container-intro.vue') })
}

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
