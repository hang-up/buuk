import Vue from 'vue'
import Vuex from 'vuex'

import core from './modules/core'
import search from './modules/search'
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        core,
        search
    }
})

