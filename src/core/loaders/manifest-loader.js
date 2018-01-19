import { articles } from 'BASE_PATH/manifest.json'
import { store } from '../store/index'
import ArticlePrimitive from './article-primitive'

/**
 * Loader to bridge the manifest and the articles.
 * This loader is wrapped in a function to pass parameters to the underlying promise.
 *
 * @param rootArticles
 */
function manifestLoader(rootArticles = articles) {

    return new Promise((resolve, reject) => {
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
                        // TODO: Put that in its own loader?
                        /*
                            Create an article primitive. A primitive is a simple base object that will get augmented
                            depending on the config passed in buuk-config.json.

                            There are 2 main scenarios:
                            1) There is an api_key, in which case we call text-summarizer and store the value in "summary"
                            2) There is no api_key
                                1) There are tags associated (summary is not undefined), we simply return the tags
                                2) There are no tags associated
                                    1) Required markdown file is less than 1500 characters, return that
                                    2) Required markdown file is more than 1500 characters, summary is empty
                         */
                        article.primitive = new ArticlePrimitive(article.title, article.slug, article.tags).value

                        import(`BASE_PATH/docs/${article.primitive.slug}.md`)
                            .then(content => {
                                article.primitive.content = content

                                // Dispatch an event of type 'manifest:primitive:content:${slug}' after loading the content of our md.
                                window.EventBus.$emit(`manifest:primitive:content:${article.slug}`)
                            })
                    }
                })
            }
        })

        store.commit({
            type: 'core/setArticles',
            articles: articles
        })


        // Resolve the loader.
        resolve()
    })

}

export default manifestLoader