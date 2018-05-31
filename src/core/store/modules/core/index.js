import Vue from 'vue';

const state = {
    articles: {},
    homepage: null,
    config: {}
};

const actions = {};

const mutations = {
    setArticles(state, payload) {
        state.articles = payload.articles;
    },

    setConfig(state, payload) {
        Vue.set(state.config, payload.getKey, payload.getValue);
    },

    setConfigHomepageValue(state, value) {
        state.homepage = value;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
