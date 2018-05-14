/*eslint-disable */
const marked = require('marked');
const highlightjs = require('./lib/index');

// TODO: Configurable theme.
require('./lib/styles/tomorrow.css');
/*eslint-enable */
/**
 * Renderer class.
 *
 */
class Renderer {
    constructor() {
        this.renderer = marked;
    }

    /**
     * Transforms a valid markdown string into its html representation.
     *
     * @param content
     * @returns {*}
     */
    render(content) {
        return this.renderer(content);
    }

    renderToc(content) {
        const customRenderer = new marked.Renderer();
        let arrayToHoldAllHeaders = [];
        customRenderer.heading = (text, level) => {
            arrayToHoldAllHeaders.push({
                level,
                text
            });
            return `<h${level} class="toc toc-header-${level}">${text}</h${level}>`;
        };
        this.renderer(content, {
            renderer: customRenderer
        });

        return arrayToHoldAllHeaders;
    }

    /**
     * Apply configuration to our renderer.
     *
     * @param config
     */
    applyConfig(config) {
        this.renderer = marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            smartLists: true,
            breaks: config.breaks || true,
            pedantic: config.strict || false,
            sanitize: config.ignore_html || false,
            smartypants: config.smart_typo || false,
            highlight: code => {
                return highlightjs.highlightAuto(code).value;
            },
            langPrefix: 'hljs lang-'
        });
    }
}

export default Renderer;
