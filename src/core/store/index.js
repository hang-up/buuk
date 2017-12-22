import Vue from 'vue'
import Vuex from 'vuex'

import articles from './modules/articles'
import search from './modules/search'
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        articles,
        search
    }
})

