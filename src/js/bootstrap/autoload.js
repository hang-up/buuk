/**
 * Registers all bootstrappers.
 *
 * A bootstrapper is a standalone module exporting a boot() method.
 *
 */

// Register all bootstrappers.
module.exports = {
    render: require('./renderBootstrap').boot(),
    routes: require('./routes').boot(),
}