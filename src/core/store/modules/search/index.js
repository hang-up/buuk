import Fuse from 'fuse.js'

const fuseOptions = {
    keys: [
        {
            name: 'article.primitive.name',
            weight: 0.4
        },
        {
            name: 'article.primitive.tags',
            weight: 0.1
        },
        {
            name: 'article.primitive.summary',
            weight: 0.25
        },
        {
            name: 'article.primitive.content',
            weight: 0.25
        }
    ]
}

const state = {
    flatArticles: [],
    results: []
}

const actions = {
    search({ commit, state }, { query }) {
        let fuse = new Fuse(state.flatArticles, fuseOptions)

        commit('setResults', {
            results: fuse.search(query)
        })
    }
}

const mutations = {
    setResults(state, results) {
        state.results = results
    },

    setFlatArticle(state, article) {
        state.flatArticles.push(article)
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}