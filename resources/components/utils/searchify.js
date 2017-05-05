const articles = require('../../../manifest.js').articles;
const _ = require('lodash')

export default {

    /**
     * Simple object to hold a flattened array of articles.
     *
     */
    data: {
        flatArticles: []
    },

    /**
     * Entry point.
     *
     * @returns {Array}
     */
    mounted() {
        this.searchify(articles)

        // We filter our articles by their slug uniqueness.
        return _.uniqBy(this.data.flatArticles, 'slug')
    },

    /**
     * Recursively loop through a given set of articles to feed them into an array used by fuse.js.
     *
     * @param articles
     */
    searchify(articles) {
        _.forEach(_.flattenDeep(_.toArray(articles)), (category) => {
            // Loop through every article of the category and push an object of the format { title, slug, tags }

            if(!("title" in category)) {
                this.searchify(category)
            }
            else {
                this.data.flatArticles.push({
                    title: category.title,
                    slug: category.slug,
                    tags: category.tags.toString()
                })
            }
        })
    }
}