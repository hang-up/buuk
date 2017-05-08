const options = require('../../../manifest').options;

/**
 * This module is responsible for everything UI related.
 *
 */
export default {

    /**
     * Entry point.
     *
     * @returns {*}
     */
    mounted() {
        this.__setTheme()
    },

    /**
     * Set the appropriate theme.
     *
     * @returns {*}
     * @private
     */
    __setTheme() {
        switch (options.theme) {
            case 'default':
                return null;

            case 'amblin':
                return require('../../sass/themes/amblin.scss')

            case 'github':
                return require('../../sass/themes/github.scss')

            case 'medium':
                return require('../../sass/themes/medium.scss')

            default:
                return null;
        }
    }
}