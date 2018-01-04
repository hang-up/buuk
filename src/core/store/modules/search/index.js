import Fuse from 'fuse.js'

const fuseOptions = {
    keys: [
        {
            name: 'article.primitive.tags',
            weight: 0.3
        },
        {
            name: 'article.primitive.summary',
            weight: 0.3
        },
        {
            name: 'article.primitive.content',
            weight: 0.4
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