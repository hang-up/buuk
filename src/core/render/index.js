const marked = require('marked');

class Renderer {

    // TODO: apply config to Renderer.
    constructor(config = null) {
        this.config = config
    }

    render(content) {
        return marked(content)
    }
}

export default Renderer