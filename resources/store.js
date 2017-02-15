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
        searched: []
    },

    mutations: {
        searchResults(state, payload) {
            state.searched = payload.searched
        }
    }
})

export default store