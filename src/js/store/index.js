import Vue from 'vue'
import Vuex from 'vuex'
import articles from './modules/articles/index'
import bootstrap from './modules/bootstrap/index'
import search from './modules/search/index'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        articles,
        bootstrap,
        search
    }
})

export default store