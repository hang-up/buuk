const options = require('../../../manifest').options;

/**
 * Set the appropriate theme.
 *
 * @returns {*}
 * @private
 */
function setTheme() {
    switch (options.theme) {
        case 'amblin':
            return 'amblin.scss'

        case 'default':
            return 'default.scss'

        default:
            return 'default.scss'
    }
}

/**
 * This module is responsible for everything themeing related.
 *
 */
export function boot() {
    return setTheme()
}