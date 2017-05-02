<style scoped>
    .side-nav li .input-field,  .side-nav li label {
        padding: 0 32px;
    }

    .input-field label:not(.label-icon).active {
        -webkit-transform: translateY(-80%);
        -moz-transform: translateY(-40%);
        -ms-transform: translateY(-40%);
        -o-transform: translateY(-40%);
        transform: translateY(-80%);
    }
</style>

<template>
    <li>
        <div class="input-field">
            <input type="text"
                   v-model="q"
                   class="validate"
                   id="search_query"
            >
            <label for="search_query">Search...</label>
        </div>
    </li>
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
            /**
             * Initialize our source search array.
             *
             */
            initSearchedArticles() {
                this.recursiveFlatten(this.$store.state.articles)
            },

            /**
             * Recursively loop inside a given array, deepening every time we meet an object that don't have
             * the key 'title' (assuming we don't have a category called 'title'...).
             *
             * @param array
             */
            recursiveFlatten(array) {
                _.forEach(_.flattenDeep(_.toArray(array)), (category) => {
                    // Loop through every article of the category and push an object of the format { title, slug, tags }

                    if(!("title" in category)) {
                        this.recursiveFlatten(category)
                    }
                    else {
                        this.searchedArticles.push({
                            title: category.title,
                            slug: category.slug,
                            tags: category.tags.toString()
                        })

                    }
                })
            },

            /**
             * Initialize our search feature.
             *
             */
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

            /**
             * Perform the search.
             *
             */
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
                }, 250)
            }, 250)
        }
    }
</script>