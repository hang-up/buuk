<template>
    <v-container fluid>
        <v-layout column align-center>
            <div v-html="renderedContent"></div>
        </v-layout>
    </v-container>
</template>

<script>
    import Renderer from "../../core/render"

    export default {
        data() {
            return {
                renderer : new Renderer(),
                renderedContent: ""
            }
        },

        mounted() {
            /*
                Initialize rendering when we get from homepage to an article page.
            */
            window.EventBus.$on('route:from:home:to:article', () => {
                this.renderedContent = this.renderer.render(this.findArticleBySlug(this.$route.params.article).content)
            })

            /*
                Every article loaded will emit an event of the type 'manifest:primitive:content:${slug}';
                We watch the event emitted by the article we land on to know when to actually have
                something to parse. This is needed since the content is retrieved asynchronously
                in manifest-loader.
             */
            window.EventBus.$on(`manifest:primitive:content:${this.$route.params.article}`, () => {
                this.renderedContent = this.renderer.render(this.findArticleBySlug(this.$route.params.article).content)
            })
        },

        watch: {
            "$route": function (val) {
                this.renderedContent = this.renderer.render(this.findArticleBySlug(this.$route.params.article).content)
            }
        },

        methods: {
            findArticleBySlug(slug) {
                return this.$store.state.search.flatArticles.filter(({ article }) => {
                    return article.primitive.slug === slug
                })[0].article.primitive
            }
        }
    }
</script>