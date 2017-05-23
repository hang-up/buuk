const options = require('../../../manifest.json').options

export function boot() {
    let routes = [
        {
            path: '/:article',
            name: 'article',
            component: require('../components/articles/article-container-intro.vue')
        }
    ]
    if (options.introduction && options.introduction !== null) {
        routes.push({
            path: '/',
            redirect: `${options.introduction}`,
            component: require('../components/articles/article-container-intro.vue')
        })
    }
    else {
        routes.push({ path: '/', component: require('../components/articles/article-container-intro.vue') })
    }

    return routes;
}