/* What is a bootstrapper?
    - it mutates the store if it deals with the store
    - it defines inherent behaviour (routing, progressive, engine selection, ...)
 */


// Register all bootstrappers.
module.exports = {
    render: require('./renderBootstrap').boot(),
    slug: require('./slugBootstrap').boot(),
    search: require('./searchBootstrap').boot(),
    theme: require('./themeBootstrap').boot(),
    routes: require('./routes').boot()
}