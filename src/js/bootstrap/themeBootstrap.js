const options = require('../../../manifest').options;

/**
 * Set the appropriate theme.
 *
 * @returns {*}
 * @private
 */
function setTheme() {
    switch (options.theme) {
        case 'default':
            return null;

        case 'amblin':
            return 'amblin.scss'

        case 'github':
            return 'github.scss'

        case 'medium':
            return 'medium.scss'

        default:
            return null;
    }
}

/**
 * This module is responsible for everything UI related.
 *
 */
export function boot() {
    return setTheme()
}