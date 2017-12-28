import { articles } from '../../__dev/manifest.json'
import { store } from '../store/index'
import ArticlePrimitive from './article-primitive'

/**
 * Loader to bridge the manifest and the articles.
 *
 * @param rootArticles
 */
function manifestLoader(rootArticles = articles) {

    Object.values(rootArticles).forEach( topLevel => {

        /*
            If we have objects (aka sub categories within this level) we recursively load them until
            we end up with an array. An array is the sign that we have POTENTIALLY reached the deepest
            level of sub categories.
          */
        if (!Array.isArray(topLevel)) {
            manifestLoader(topLevel)
        }
        else {
            /*
                If we get an array, we MIGHT be at the deepest level of sub categories. This is not a certainty
                since we can have an infinite number of sub categories.
              */
            Object.values(topLevel).forEach((article, category) => {

                /*
                    IMPORTANT:
                    "title" is a reserved keyword. It is how we know if we have further nested categories.
                  */
                if (!article.title) {
                    manifestLoader(article)
                }
                else {
                    article.primitive = new ArticlePrimitive(article.title, article.slug, article.tags).value
                }
            })
        }
    })


    store.commit({
        type: 'core/setArticles',
        articles: articles
    })
}

export default manifestLoader