<template>
    <div class="col s12">
        <div class="col s12 m9 l10"
             id="wrapper"
             v-html="file"
        >
        </div>
    </div>
</template>

<script type="text/babel">
    const options = require('../../../../manifest.json').options

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
                // Initialize our markdown parser.
                const md = require('../../bootstrap/autoload').render

                // Clear up the viewport.
                this.$store.dispatch('resetSearch')

                // Go on top of viewport.
                window.scrollTo(0, 0)

                // Load the relevant md with appropriate option.
                try {
                    if (options.uml) {
                        new Promise((resolve, reject) => {
                            this.file = md.render(require(`../../../../docs/${this.$route.params.article}.md`))
                            resolve()
                        }).then(() => {
                            window.mermaid.init(undefined, ".mermaid")
                        })
                    }
                    else
                        this.file = md.render(require(`../../../../docs/${this.$route.params.article}.md`))
                }
                catch (e) {
                    this.file = md.render(require(`../../../../docs/404.md`))
                }
            },
        }
    }
</script>