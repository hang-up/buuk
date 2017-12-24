
const state = {
    articles: null
}

const actions = {

}

const mutations = {
    setArticles(state, payload) {
        state.articles = payload.articles
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}