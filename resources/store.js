const _ = require('lodash')
const Vue = require('vue')
const Vuex = require('vuex')
const manifest = require('../manifest.js')
const articles = require('../resources/components/utils/slugify').default.mounted()

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        articles,
        app: manifest.app,
        description: manifest.description,
        sub: manifest.sub,
        query: "",
        searched: []
    },

    mutations: {
        searchResults(state, payload) {
            state.searched = payload.searched
        },

        resetSearchResults(state) {
            state.searched = []
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