<template>
    <div style="margin-top: 5rem; margin-bottom: 5rem;">
        <!-- Container for search results -->
        <search-results></search-results>

        <!-- Container for documentation -->
        <div class="ui text container"
             v-html="file"
        >
        </div>
    </div>
</template>

<script type="text/babel">
    const md = require('markdown-it')({
        breaks: true,
        typographer: true
    }).use(require('markdown-it-center-text'))

    export default {
        name: 'article-container',

        components: {
            searchResults: require('./search-results.vue')
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
                this.$store.commit({
                    type: 'resetSearchResults'
                })

                // Load the relevant md.
                this.file = md.render(require(`../assets/${this.$route.params.article}.md`))
            }
        }
    }
</script>