<style scoped>
    /**
        Needed for animating the cross deleting search terms.
    **/
    .fade-enter-active, .fade-leave-active {
        transition: all .5s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
    {
        transform: translateY(10px);
        opacity: 0;

    }

    .search-wrapper {
        margin: 12px;
        transition: margin .25s ease;
    }

    .search-wrapper.focused {
        margin: 12px 0;
    }

    .search-wrapper #search {
        display: block;
        font-size: 16px;
        font-weight: 300;
        width: 100%;
        height: 45px;
        margin: 0;
        padding: 0 45px 0 15px;
        border: 0;
    }

    .search-wrapper #search:focus {
        box-shadow: none !important;
    }
</style>

<template>
    <div class="search-wrapper card"
         v-bind:class="{ focused: isFocused }"
         ref="searchWrapper"
    >

        <!-- Search input. -->
        <input type="text"
               id="search"
               v-model="q"
               placeholder="Search..."
               v-on:click="isFocused = !isFocused"
               v-on:blur="isFocused = !isFocused">

        <!-- Delete search terms. -->
        <transition name="fade">
            <i class="material-icons"
               style="position: absolute; right: 26px; top: 10px; cursor: pointer"
               v-if='q != ""'
               @click='q = ""'
            >clear</i>
        </transition>
    </div>
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
                fuse: null,
                isFocused: false
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
                if (this.q === "") {
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
        }
    }
</script>