<template>
    <div class="col s12">
        <!-- Search results. -->
        <!--<search-results v-if="$store.state.query"></search-results>-->

        <!-- Article. -->
        <div class="col s12 m9 l10"
             id="wrapper"
             v-html="file"
        >
        </div>
    </div>
</template>

<script type="text/babel">

    // Initialize our markdown parser.
    const md = require('../../bootstrap/renderBootstrap').boot()

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

                // Go on top of viewport.
                window.scrollTo(0, 0)

                // Load the relevant md.
                this.file = md.render(require(`../../../../docs/${this.$route.params.article}.md`))
            }
        }
    }
</script>