const Vue = require('vue')
const Vuex = require('vuex')
const manifest = require('../manifest.js')
const articles = require('../resources/components/utils/slugify').default.mounted()
const searchArticles = require('../resources/components/utils/searchify').default.mounted()

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        app: manifest.app,
        description: manifest.description,
        sub: manifest.sub,
        options: manifest.options,

        articles,

        query: "",
        searchArticles,
        searchResults: []
    },

    mutations: {
        searchResults(state, payload) {
            state.searchResults = payload.searchResults
        },

        resetSearchResults(state) {
            state.searchResults = []
        },

        updateQuery(state, payload) {
            state.query = payload.query
        },

        resetQuery(state) {
            state.query = ""
        }
    },

    actions: {
        /**
         * Reset search results and search query.
         *
         * @param commit
         */
        resetSearch({ commit }) {
            commit('resetSearchResults')
            commit('resetQuery')
        }
    }
})

export default store