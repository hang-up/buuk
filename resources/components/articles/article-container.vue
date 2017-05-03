<template>
    <div class="col s12">
        <!-- Search results. -->
        <search-results v-if="$store.state.query"></search-results>

        <!-- Article. -->
        <div class="col s12 m9 l10"
             v-html="file"
             v-else
        >
        </div>
    </div>
</template>

<script type="text/babel">
    const md = require('markdown-it')({
        breaks: true,
        typographer: true
    }).use(require('markdown-it-center-text'))

    const path = require("path")

    export default {
        name: 'article-container',

        components: {
            searchResults: require('../search/search-results.vue')
        },

        data() {
            return {
                file: ""
            }
        },

        // We need to watch route and re-render since every page loads a different .md file.
        watch: {
            '$route' : 'requiring'
        },

        mounted() {
            this.requiring()
        },

        methods: {
            requiring() {
                // Clear up the viewport.
                this.$store.dispatch('resetSearch')

                // Load the relevant md.
                this.file = md.render(require(`../../../dist/assets/${this.$route.params.article}.md`))
            }
        }
    }
</script>