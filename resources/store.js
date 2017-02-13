const _ = require('lodash')
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        articles: require('../manifest.json'),
        current: ""
    },

    mutations: {
        updateCurrent(state, payload) {
            state.current = payload.current
        }
    }
})

export default store