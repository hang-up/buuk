import ArticlePrimitive from './article-primitive'


/**
 * Loader to dynamically generate an article primitive.
 *
 * @param articleParam: either an incomplete Article object OR a slug.
 * @returns {Promise}
 */
function articleLoader(articleParam) {
    return new Promise((resolve, reject) => {

        // Returned value.
        let res = {}

        // Called with an incomplete article object with only title, slug and tags properties.
        if (articleParam.slug) {
            res = {
                ...articleParam,
                primitive: new ArticlePrimitive(articleParam.title, articleParam.slug, articleParam.tags).value
            }

            // Dynamically load content of .md associated to the slug.
             _load(res.primitive.slug, res)
        }
        else {
            /*
                 Called with a slug: the only case this is used is to load a custom homepage,
                 so we assume the primitive will have "Homepage" as title.
             */
            res.primitive = new ArticlePrimitive('Homepage', articleParam, "").value

            // Dynamically load content of .md associated to the slug.
            _load(articleParam, res)
        }

        // Resolve the loader.
        resolve(res)
    })
}

/**
 * Internal function to load the content of the .md associated with the slug.
 *
 * @param slug
 * @param article: THIS PARAM IS MUTATED.
 * @private
 */
function _load(slug, article) {

    import(`BASE_PATH/docs/${slug}.md`)
        .then(content => {
            article.primitive.content = content

            // Dispatch an event of type 'article:primitive:content:${slug}' after loading the content of our md.
            window.EventBus.$emit(`article:primitive:content:${slug}`)
        })
}



export default articleLoader