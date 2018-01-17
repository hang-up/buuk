import Vue from 'vue'
import Router from 'vue-router'
const pages = () => import('@/components/pages/pages')
const home = () => import('@/components/pages/templates/home')

Vue.use(Router)

const router =  new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
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
            window.EventBus.$emit('router:after:from:home:to:article')
        }, 100)
    }
    else if (to.name === 'article') {
        window.setTimeout(() => {
            window.EventBus.$emit('router:after:to:article')
        }, 100)
    }
})

router.beforeEach((to, from, next) => {
    if (to.name === 'article') {
        window.EventBus.$emit('router:before:to:article')
    }
    next()
})

export default router