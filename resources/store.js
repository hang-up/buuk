const _ = require('lodash')
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        articles: require('../manifest.json'),
        current: ""
    }
})

export default store