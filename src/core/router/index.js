import Vue from 'vue';
import Router from 'vue-router';
const pages = () => import('@/components/pages/pages');
const home = () => import('@/components/pages/templates/home');

Vue.use(Router);

const router = new Router({
    mode: 'history',
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
    ],
    scrollBehavior: function(to) {
        if (to.hash) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        selector: to.hash,
                        offset: {
                            x: 0,
                            y: 70 // Navigation header is 64px, we just need a small padding.
                        }
                    });
                }, 100);
            });
        }
    }
});

router.afterEach((to, from) => {
    /*
      We need to delay emitting events since we want components to actually render and be able
      to listen to those events. FYI, this guard triggers before the components mount.
      100ms is arbitrary.
   */
    if (to.name === 'article' && from.name === 'home') {
        window.setTimeout(() => {
            window.EventBus.$emit('router:after:from:home:to:article');
        }, 100);
    } else if (to.name === 'article') {
        window.setTimeout(() => {
            window.EventBus.$emit('router:after:to:article');
        }, 100);
    } else if (to.name === 'home') {
        window.setTimeout(() => {
            window.EventBus.$emit('router:after:to:home');
        }, 100);
    }
});

router.beforeEach((to, from, next) => {
    if (to.name === 'article') {
        window.EventBus.$emit('router:before:to:article');
    }
    next();
});

export default router;
