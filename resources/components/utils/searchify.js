const articles = require('../../../manifest.js').articles;
const _ = require('lodash')

export default {

    data: {
        flatArticles: []
    },

    /**
     * Entry point.
     *
     */
    mounted() {
        this.searchify(articles)
        return _.uniqBy(this.data.flatArticles, 'title')
    },

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