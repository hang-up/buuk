import Vue from 'vue'
import Router from 'vue-router'
import pages from '@/components/pages/pages.vue'
import intro from '@/components/pages/templates/intro'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: intro
        },
        {
            path: 'articles/:article',
            name: 'article',
            component: pages
        }
    ]
})
