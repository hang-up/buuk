class ArticlePrimitive {

    constructor(name) {
        this.name = name
    }

    get value() {
        // This is where we return a beautifully wrapped class including name - slug - summary of the article
        return this.computeValue()
    }

    computeValue() {
        return {
            name: this.name,
            slug: "slugged",
            summary: "summary not implemented yet"
        }
    }

}

export default ArticlePrimitive