import { options } from '../../../static/manifest.json'
import articleContainer from '../components/articles/article-container.vue'
import articleContainerIntro from '../components/articles/article-container-intro.vue'

// const options = require('../../../manifest.json').options

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
            component: articleContainer
        }
    ]
    if (options.introduction && options.introduction !== null) {
        routes.push({
            path: '/',
            redirect: `${options.introduction}`,
            component: articleContainer
        })
    }
    else {
        routes.push({ path: '/', component: articleContainerIntro })
    }

    return routes;
}