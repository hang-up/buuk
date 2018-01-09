/**
 * An article primitive is just a simple base class that will later get augmented with the field
 * that are being exposed in the value getter.
 * Each updatable field will therefore need a corresponding setter.
 *
 */
class ArticlePrimitive {

    constructor(name, slug, tags = null) {
        this.name = name
        this.slug = slug
        this.tags = tags
    }


    /**
     * Getter to access primitive value.
     *
     * @returns {{name: *, slug: null, summary: *}}
     */
    get value() {
        // This is where we return a beautifully wrapped class object of the article.
        return {
            name: this.name,
            slug: this.slug,
            tags: this.tags,
            summary: null,
            content: null
        }
    }


    /**
     * Setter for exposed summary field.
     *
     * @param value
     */
    set summary(value) {
        this.summary = value
    }


    /**
     * Setter for exposed content field.
     *
     * @param value
     */
    set content(value) {
        this.content = value
    }
}

export default ArticlePrimitive