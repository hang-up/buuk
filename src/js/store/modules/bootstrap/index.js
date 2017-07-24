import manifest from '../../../../../static/manifest.json'
import locale from './locale'

// Get the logo if set inside manifest options.
const logo = manifest.options.logo ? manifest.options.logo : ""

// Get the appropriate locale from locale file.
const localizations = locale[manifest.options.lang]

const state = {
    short_name: manifest.short_name,
    name: manifest.name,
    sub: manifest.sub,
    logo,
    localizations
}

export default {
    state
}