import config from 'BASE_PATH/buuk-config.js';
import { store } from '../store/index';
import ConfigPrimitive from './config-primitive';
import articleLoader from './article-loader';

/**
 * Loader to interface buuk-config.js entries.
 *
 */
const configLoader = new Promise(resolve => {
    // Array of supported options.
    const validOptions = ['name', 'short_name', 'description', 'renderer', 'theme_color', 'homepage', 'logo'];

    // Homepage specific operation
    window.EventBus.$on('config:homepage', () => {
        // If homepage is specified, we load its content to our store.
        if (store.state.core.config.homepage) {
            articleLoader(store.state.core.config.homepage).then(({ primitive }) => {
                store.commit('core/setConfigHomepageValue', primitive);
            });
        }
    });

    Object.entries(config).forEach(item => {
        if (validOptions.includes(item[0])) {
            // Load the supported option into our store.
            store.commit('core/setConfig', new ConfigPrimitive(item[0], item[1]));

            // Dispatch an event of type 'config:${config_key}' every time we successfully load a config.
            window.EventBus.$emit(`config:${item[0]}`, item[1]);
        }
    });

    // Resolve the loader.
    resolve();
});

export default configLoader;
