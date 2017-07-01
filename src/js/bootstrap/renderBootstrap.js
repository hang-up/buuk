const mdi = require('markdown-it')

/**
 * This module returns the appropriate markdown parser.
 *
 */
export function boot() {
    const md = mdi({
        html: false,                                // true this to enable hmtl in markdown.
        breaks: true,
        typographer: true,
        linkify: true
    })
    /*
        Base plugins.
     */
        .use(require('markdown-it-center-text'))
        .use(require('markdown-it-highlightjs'), "auto")
        .use(require('markdown-it-sup'))
        .use(require('markdown-it-underline'))
    /*
        Conditional plugins.
     */
    //     .use(require('markdown-it-mermaid'))
    //     .use(require('markdown-it-checkbox'))
    //     .use(require('markdown-it-latex'))

    return md
}