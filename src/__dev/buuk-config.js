module.exports = {

    /*
      name and sub are displayed on the default homepage.
      short_name is displayed at app startup and on top of the navbar.
      sub should provide additional details about what the Bük is.
     */
    "name": "Bük 4",
    "short_name": null,
    "sub": "",

    /*
        TODO: Homepage references another markdown file as the default homepage. Path is relative to /docs
     */
    "homepage": null,

    /*
        TODO: support multilang for hardcoded string AND language switch
     */
    "language": "en",

    /*
        TODO: Theme support?
     */
    "theme": null,

    /*
        Renderer Options.
        - breaks: Enable GFM line breaks.
        - strict: Conforms to markdown.pl as much as possible. Setting this to true might resolve obscure scenarios.
        - ignore_html: Sanitizes the output, ignores any html inputted.
        - smart_typo: Subtle changes to typographic punctuation (quotes, dashes, ...)
     */
    renderer: {
        breaks: true,
        strict: false,
        ignore_html: false,
        smart_typo: false
    },

    /*
        TODO: Summary of articles
     */
    "summarize_api_key": null

}