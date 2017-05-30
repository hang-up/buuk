const options = require('../../../manifest.json').options

/**
 * This module will bootstrap specific sidebar behaviour.
 *
 * @returns {*}
 */
export function boot() {
    if (!options.logo)
        return undefined
    else
        return options.logo
}