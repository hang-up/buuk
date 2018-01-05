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
    results: [],
    query: ''
}

const actions = {
    search({ commit, state }) {
        let fuse = new Fuse(state.flatArticles, fuseOptions)

        commit('setResults', {
            results: fuse.search(state.query)
        })
    }
}

const mutations = {
    setResults(state, { results }) {
        state.results = results
    },

    setFlatArticle(state, article) {
        state.flatArticles.push(article)
    },

    setQuery(state, { query }) {
        state.query = query
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}