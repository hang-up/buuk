const state = {
    currentArticle: {
        name: ''
    }
}

const actions = {

}

const mutations = {
    setCurrentArticle(state, payload) {
        state.currentArticle = payload.currentArticle
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}