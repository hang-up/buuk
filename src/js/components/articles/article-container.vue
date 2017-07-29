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
    import { options } from '../../../../static/manifest.json'
    import searchResults from '../search/search-results.vue'
    import { renderer } from '../../bootstrap/renderer'

    export default {
        name: 'article-container',

        components: {
            searchResults
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
                this.$store.dispatch('search/resetSearch')

                // Go on top of viewport.
                window.scrollTo(0, 0)

                // Load the relevant md with appropriate option.
                try {
                    if (options.uml) {
                        new Promise((resolve, reject) => {
                            this.file = renderer().render(require(`../../../../static/docs/${this.$route.params.article}.md`))
                            resolve()
                        }).then(() => {
                            window.mermaid.init(undefined, ".mermaid")
                        })
                    }
                    else
                        this.file = renderer().render(require(`../../../../static/docs/${this.$route.params.article}.md`))
                }
                catch (e) {
                    this.file = renderer().render(require(`../../../../static/docs/404.md`))
                }
            },
        }
    }
</script>