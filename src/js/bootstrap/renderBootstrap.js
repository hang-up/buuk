/**
 * This module returns the appropriate markdown parser.
 *
 */
export function boot() {
    // Switch renderer here. UML support?
    const md = require('markdown-it')({
        breaks: true,
        typographer: true
    })
        .use(require('markdown-it-center-text'))
        .use(window.highlightjs, "auto");

    return md
}