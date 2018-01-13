const marked = require('marked');

class Renderer {
    constructor() {}

    render(content) {
        return this.marked(content)
    }

    applyConfig(config) {
        this.marked = marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            smartLists: true,
            breaks: config.breaks || true,
            pedantic: config.strict || false,
            sanitize: config.ignore_html || false,
            smartypants: config.smart_typo || false
        })
    }
}

export default Renderer