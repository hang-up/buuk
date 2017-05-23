
/*
    This is a direct bootstrap meaning it doesn't need to be registered inside autoload to be used.
 */
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