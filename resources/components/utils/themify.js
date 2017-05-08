const options = require('../../../manifest').options;

export default {
    mounted() {
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