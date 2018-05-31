import { articles } from 'BASE_PATH/manifest.json';
import { store } from '../store/index';
import articleLoader from './article-loader';

/**
 * Loader to bridge the manifest and the articles.
 * This loader is wrapped in a function to pass parameters to the underlying promise.
 *
 * @param rootArticles
 */
function manifestLoader(rootArticles = articles) {
    let tree = rootArticles;

    return new Promise(resolve => {
        Object.values(tree).forEach(topLevel => {
            /**
             * If we have objects (aka sub categories within this level) we recursively load them until
             * we end up with an array. An array is the sign that we have POTENTIALLY reached the deepest
             * level of sub categories.
             *
             */
            if (!Array.isArray(topLevel)) {
                manifestLoader(topLevel);
            } else {
                /**
                 * If we get an array, we MIGHT be at the deepest level of sub categories. This is not a certainty
                 * since we can have an infinite number of sub categories.
                 *
                 */
                Object.values(topLevel).forEach(article => {
                    /**
                     * IMPORTANT:
                     * "title" is a reserved keyword. It is how we know if we have further nested categories.
                     *
                     */
                    if (!article.title) {
                        manifestLoader(article);
                    } else {
                        articleLoader(article).then(fullArticle => {
                            article = Object.assign(article, fullArticle);

                            // Dispatch an event of type 'manifest:primitive:content:${slug}' after loading the content of our md.
                            window.EventBus.$emit(`manifest:primitive:content:${article.slug}`);
                        });
                    }
                });
            }
        });
        store.commit({
            type: 'core/setArticles',
            articles: tree
        });
        resolve();
    });
}

export default manifestLoader;
