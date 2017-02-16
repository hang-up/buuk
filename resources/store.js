const _ = require('lodash')
import Vue from 'vue'
import Vuex from 'vuex'
const manifest = require('../manifest.json')
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        articles: manifest.articles,
        app: manifest.app,
        description: manifest.description,
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
        resetSearch({ commit }) {
            commit('resetSearchResults')
            commit('resetQuery')
        }
    }
})

export default store