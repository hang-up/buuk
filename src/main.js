// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {
    Vuetify,
    VApp,
    VCard,
    VNavigationDrawer,
    VIcon,
    VList,
    VGrid,
    VTextField,
    VDataTable,
    VAlert,
    VToolbar,
    VTooltip,
    VBtn
} from 'vuetify'

require('./themes/main.styl')

import App from './App'
import router from './core/router'
import { store } from './core/store'
import { EventBus } from "./core/utils/event-bus";
import manifestLoader from './core/loaders/manifest-loader'
import styleLoader from './core/loaders/style-loader'
import searchLoader from './core/loaders/search-loader'
import configLoader from "./core/loaders/config-loader"

Vue.use(Vuetify, {
    components: {
        VApp,
        VNavigationDrawer,
        VCard,
        VIcon,
        VList,
        VGrid,
        VTextField,
        VDataTable,
        VAlert,
        VToolbar,
        VTooltip,
        VBtn
    }
})
Vue.config.productionTip = false

// Initialize Vue root component.
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})

// Loaders.
styleLoader
    .then(() => configLoader)
    .then(() => manifestLoader())
    .then(() => searchLoader())
