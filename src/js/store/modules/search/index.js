import searchArticles from './searchArticles'

const state = {
    query: "",
    searchArticles,
    searchResults: []
}

const actions = {
    /**
     * Reset search results and search query.
     *
     * @param commit
     */
    resetSearch({commit}) {
        commit('resetSearchResults')
        commit('resetQuery')
    }
}

const mutations = {
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
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}