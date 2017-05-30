/**
 * Registers all bootstrappers.
 *
 * A bootstrapper is a standalone module exporting a boot() method.
 *
 */

// Register all bootstrappers.
module.exports = {
    render: require('./renderBootstrap').boot(),
    slug: require('./slugBootstrap').boot(),
    search: require('./searchBootstrap').boot(),
    theme: require('./themeBootstrap').boot(),
    routes: require('./routes').boot(),
    localization: require('./localizationBootstrap').boot(),
    sidebar: require('./sidebarBootstrap').boot()
}