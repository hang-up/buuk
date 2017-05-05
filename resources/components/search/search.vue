<style scoped>
    .side-nav li .input-field, .side-nav li label {
        padding: 0 32px;
    }

    .input-field label:not(.label-icon).active {
        -webkit-transform: translateY(-80%);
        -moz-transform: translateY(-40%);
        -ms-transform: translateY(-40%);
        -o-transform: translateY(-40%);
        transform: translateY(-80%);
    }

    /**
        Needed for animating the cross deleting search terms.
    **/
    .fade-enter-active, .fade-leave-active {
        transition: all .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        transform: translateY(10px);
        opacity: 0;

    }
</style>

<template>
    <li>
        <div class="input-field">

            <!-- Delete search terms. -->
            <transition name="fade">
                <i class="material-icons"
                   style="position: absolute; right: 26px; top: 10px; cursor: pointer"
                   v-if='q != ""'
                   @click='q = ""'
                >clear</i>
            </transition>

            <!-- Search input. -->
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
        },

        watch: {
            q() {
                this.searchResults()
            }
        },

        methods: {
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

                this.fuse = new Fuse(this.$store.state.searchArticles, options)
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
                            searchResults: []
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
                        searchResults: this.fuse.search(this.q)
                    })

                    this.isDebouncing = !this.isDebouncing
                }, 250)
            }, 250)
        }
    }
</script>