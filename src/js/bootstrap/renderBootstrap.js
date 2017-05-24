export function boot() {
    // Switch renderer here. UML support?
    const md = require('markdown-it')({
        breaks: true,
        typographer: true
    })
        .use(require('markdown-it-center-text'))
        .use(require('markdown-it-highlightjs'), "auto");

    return md
}