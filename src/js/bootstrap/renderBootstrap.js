const mdi = require('markdown-it')
const mdict = require('markdown-it-center-text')

const umlSupport = require('../../../manifest.json').options.uml
/**
 * This module returns the appropriate markdown parser.
 *
 */
export function boot() {
    const md = mdi({
        breaks: true,
        typographer: true
    })

    // Default plugins.
    md
        .use(mdict)
        .use(window.highlightjs, "auto")

    // If we decide to support uml, we'll need to import mermaid.
    if (umlSupport) {
        md.use(require('markdown-it-mermaid/src'))
    }

    return md
}