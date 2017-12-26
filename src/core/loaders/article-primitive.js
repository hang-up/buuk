import config from './buuk-config.json'

class ArticlePrimitive {

    constructor(name, summary = null) {
        this.name = name
        this.summary = summary
        this.slug = null
    }


    /**
     * Getter to access primitive value.
     *
     * @returns {{name: *, slug: null, summary: *}}
     */
    get value() {
        // This is where we return a beautifully wrapped class including name - slug - summary of the article
        return {
            name: this.name,
            slug: this.slug,
            summary: this.summary
        }
    }


    /**
     * Set primitive summary
     *
     * @private
     */
    _setSummary() {
        /*
            2 main case scenario here:
                1) There is an api_key, in which case we call text-summarizer
                2) There is no api_key
                    1) There are tags associated (summary is not undefined), we simply return the tags
                    2) There are no tags associated
                        1) Required markdown file is less than 1500 characters, return that
                        2) Required markdown file is more than 1500 characters, summary is empty
         */
    }


    /**
     * Set primitive slug.
     *
     * @private
     */
    _setSlug() {

    }

}

export default ArticlePrimitive