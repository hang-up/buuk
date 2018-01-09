import config from '../../__dev/buuk-config.js'
import { store } from '../store/index'
import ConfigPrimitive from './config-primitive'

function configLoader() {
    // Array of supported options.
    const validOptions = [ "name", "short_name", "sub"]

    // Load the validated option into our store.
    Object.entries(config).forEach(item => {
        if (validOptions.includes(item[0])) {
            store.commit('core/setConfig', new ConfigPrimitive(item[0], item[1]))
        }
    })
}

export default configLoader