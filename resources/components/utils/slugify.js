const slugify = require('slugify')
const lower = require('lower-case')
const articles = require('../../../manifest.js').articles;
const _ = require('lodash')

/**
 * This will go through each article in the manifest and append a slug to them
 * (if they already don't have one). The slug format is either a simple one
 * (category-name) or an advanced one (direct parent)category-name-of-the-article.
 *
 */
export default {

    /**
     * Entry point.
     *
     * @returns {*}
     */
    mounted() {
        return this.slugify(articles)
    },

    /**
     * Recursively loop through a given articles array to slug each article.
     * A slug will be of the following format:
     *      (direct parent)category-name-of-the-article
     *
     * @param articles
     * @returns {*}
     */
    slugify(articles) {

        _.forEach(articles, (categories, key) => {
            if (!this._isDeep(categories)) {
                this.slugify(categories)
            }
            else {
                _.forEach(categories, (article, _) =>{

                    // We get the name of the parent article(key) and concat it with the name of the current article.
                    let _slug = lower(key) + "-" + lower(article.title)
                    article.slug = slugify(_slug)

                })
            }
        })

        return articles
    },

    /**
     * Check if a category has any sub categories.
     *
     * @param array
     * @private
     */
    _isDeep(array) {
        return _.isArray(array)
    }
}
