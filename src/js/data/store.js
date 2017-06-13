import Vue from 'vue'
import Vuex from 'vuex'
const manifest = require('../../../manifest.json')

const bootstrap = require('../bootstrap/autoload')
const articles = bootstrap.slug
const searchArticles = bootstrap.search
const localizations = bootstrap.localization
const logo = bootstrap.sidebar

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        short_name: manifest.short_name,
        name: manifest.name,
        sub: manifest.sub,
        logo,
        localizations,

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