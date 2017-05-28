const options = require('../../../manifest.json').options

export function boot() {
    if (!options.logo)
        return undefined
    else
        return options.logo
}