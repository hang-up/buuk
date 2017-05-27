<template>
    <div class="col s12">

        <!-- Navigation -->
        <navigation></navigation>

        <div class="col s12 m9 l10"
             id="wrapper"
             v-html="file"
        >
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'article-container',

        components: {
            searchResults: require('../search/search-results.vue'),
            navigation: require('../navigation/navigation.vue')
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
                // Initialize our markdown parser.
                const md = require('../../bootstrap/autoload').render

                // Clear up the viewport.
                this.$store.dispatch('resetSearch')

                // Go on top of viewport.
                window.scrollTo(0, 0)

                // Load the relevant md.
                try {
                    this.file = md.render(require(`../../../../docs/${this.$route.params.article}.md`))
                }
                catch (e) {
                    this.file = md.render(require(`../../../../docs/404.md`))
                }
            }
        }
    }
</script>