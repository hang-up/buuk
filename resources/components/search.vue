<template>
    <a class="item">
        <div class="ui transparent fluid input">
            <input type="text"
                   placeholder="Search..."
                   v-model="q"
            >
        </div>
    </a>
</template>

<script>
    const _ = require('lodash')
    const Fuse = require('fuse.js')

    export default {
        data() {
            return {
                q: "",
                searchedArticles: [],
                isDebouncing: false,
                fuse: null
            }
        },

        mounted() {
            this.initSearch()
            this.initSearchedArticles()
        },

        watch: {
            q() {
                this.searchResults()
            }
        },

        methods: {
            initSearchedArticles() {
                _.forEach(this.$store.state.articles, (category) => {
                    // Loop through every article of the category and push an object of the format { title, slug, tags }
                    _.forEach(category, (article) => {
                        this.searchedArticles.push({
                            title: article.title,
                            slug: article.slug,
                            tags: article.tags
                        })
                    })
                })
            },

            initSearch(){
                let options = {
                    keys: [
                        {
                            name: 'tags',
                            weight: 0.8
                        }, {
                            name: 'title',
                            weight: 0.1
                        },
                        {
                            name: 'slug',
                            weight: 0.1
                        }
                    ],
                    threshold: 0.5,
                }

                this.fuse = new Fuse(this.searchedArticles, options)
            },

            searchResults: _.debounce(function () {
                setTimeout(() => {

                    if (this.q == "") {
                        this.$store.commit({
                            type: 'searchResults',
                            searched: []
                        })
                    }

                    // Sync our query with the store query so that we can display/hide search module.
                    this.$store.commit({
                        type: 'updateQuery',
                        query: this.q
                    })

                    // Fetch store results array.
                    this.$store.commit({
                        type: 'searchResults',
                        searched: this.fuse.search(this.q)
                    })

                    this.isDebouncing = !this.isDebouncing
                }, 500)
            }, 500)
        }
    }
</script>