import Vue from 'vue'
import Router from 'vue-router'
import pages from '@/components/pages/pages.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: pages
        }
    ]
})
