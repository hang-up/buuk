// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './core/router'
import { store } from './core/store'
import { EventBus } from "./core/utils/event-bus";
import manifestLoader from './core/loaders/manifest-loader'
import searchLoader from './core/loaders/search-loader'
import configLoader from "./core/loaders/config-loader";

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})

// Loaders.
configLoader()
manifestLoader()
searchLoader()