import Vue from 'vue'
import Router from 'vue-router'
import pages from '@/components/pages/pages.vue'
import intro from '@/components/pages/templates/intro'

Vue.use(Router)

const router =  new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: intro
        },
        {
            path: '/articles/:article',
            name: 'article',
            component: pages
        }
    ]
})

router.afterEach((to, from) => {
    if (to.name === 'article' && from.name === 'home') {
        /*
            We need to delay emitting the event since we want the component to actually render and be able
            to listen to this event. FYI, this guard triggers before the component mounts.
            100ms is arbitrary.
         */
        window.setTimeout(() => {
            window.EventBus.$emit('route:from:home:to:article')
        }, 100)
    }
})

export default router