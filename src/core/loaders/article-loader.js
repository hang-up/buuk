import ArticlePrimitive from './article-primitive';

/**
 * Loader to dynamically generate an article primitive.
 *
 * @param articleParam: either an incomplete Article object OR a slug.
 * @returns {Promise}
 */
function articleLoader(articleParam) {
    return new Promise(resolve => {
        let res = {};

        // Called with an incomplete article object with only title, slug and tags properties.
        if (articleParam.slug) {
            res = {
                ...articleParam,
                primitive: new ArticlePrimitive(articleParam.title, articleParam.slug, articleParam.tags).value
            };

            // Dynamically load content of .md associated to the slug.
            asyncImportArticleContent(res, resolve);
        } else {
            /**
             * Called with a slug: the only case this is used is to load a custom homepage,
             * so we assume the primitive will have "Homepage" as title.
             */
            res.primitive = new ArticlePrimitive('Homepage', articleParam, '').value;

            // Dynamically load content of .md associated to the slug.
            asyncImportArticleContent(res, resolve);
        }
    });
}

/**
 * Asynchronously import article content. Eventually resolves the promise it is being called in.
 *
 * @param {*} article
 * @param {*} resolve
 */
function asyncImportArticleContent(article, resolve) {
    import(`BASE_PATH/docs/${article.primitive.slug}.md`)
        .then(content => {
            article.primitive.content = content;
            window.EventBus.$emit(`article:primitive:content:${article.primitive.slug}`);
            return article;
        })
        .then(article => {
            resolve(article);
        });
}

export default articleLoader;
