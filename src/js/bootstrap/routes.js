const options = require('../../../manifest.json').options

/**
 * This module registers all routes of the application.
 *
 * @returns {[*]}
 */
export function boot() {
    let routes = [
        {
            path: '/:article',
            name: 'article',
            component: require('../components/articles/article-container.vue')
        }
    ]
    if (options.introduction && options.introduction !== null) {
        routes.push({
            path: '/',
            redirect: `${options.introduction}`,
            component: require('../components/articles/article-container.vue')
        })
    }
    else {
        routes.push({ path: '/', component: require('../components/articles/article-container-intro.vue') })
    }

    return routes;
}