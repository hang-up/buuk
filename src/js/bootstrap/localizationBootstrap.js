const lang = require('../../../manifest.json').options.lang

const en = {
    'all_articles': "All articles",
    'toggle_fs': "Toggle fullscreen",
    'search': "Search...",
    'no_result': 'No result found',
    'introduction': "Introduction"
}

const fr = {
    'all_articles': "Tous les articles",
    'toggle_fs': "Plein écran",
    'search': "Rechercher...",
    'no_result': "Aucun résultat",
    'introduction': "Introduction"
}

export function boot() {
    switch (lang) {
        case 'en':
            return en
        break

        case 'fr':
            return fr
            break

        default:
            return en
        break
    }
}