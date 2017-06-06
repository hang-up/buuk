const articles = require('../../../manifest.json').articles;
const _ = window._

/**
 * Simple object to hold a flattened array of articles.
 *
 */
let data = {
    flatArticles: []
}

/**
 * Recursively loop through a given set of articles to feed them into an array used by fuse.js.
 *
 * @param articles
 * @param res
 */
function searchify(articles) {
    _.forEach(_.flattenDeep(_.toArray(articles)), (category) => {
        // Loop through every article of the category and push an object of the format { title, slug, tags }


        if(!("title" in category)) {
            searchify(category)
        }
        else {
            data.flatArticles.push({
                title: category.title,
                slug: category.slug,
                tags: category.tags.toString()
            })
        }
    })
}

/**
 * This module will go through each article indexed in manifest.json and will initialize the search
 * feature while filtering duplicates.
 *
 */
export function boot() {
    /**
     * Entry point.
     *
     * @returns {Array}
     */
    searchify(articles)

    // We filter our articles by their slug uniqueness.
    return _.uniqBy(data.flatArticles, 'slug')

}