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
        tags: []
    },

    mutations: {
        search(state, payload) {
            state.query = payload.query
        }
    }
})

export default store