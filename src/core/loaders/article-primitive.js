import config from '../../__dev/buuk-config.json'
import { paths } from '../utils/resolver'

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

    set summary(value) {
        this.summary = value
    }

    set content(value) {
        this.content = value
    }
}

export default ArticlePrimitive