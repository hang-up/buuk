<style>
    .pages-container {
        transition: opacity 0.25s ease-in-out;
        -moz-transition: opacity 0.25s ease-in-out;
        -webkit-transition: opacity 0.25s ease-in-out;
    }

    .fade-in-enter{
        opacity: 1;
    }

    .fade-in-leave {
        opacity: 0;
    }
</style>

<template>
    <v-container fluid :class="enterClass" class="pages-container">
        <v-layout column align-center>
            <pages-template-renderer :content="renderedContent"></pages-template-renderer>
        </v-layout>
    </v-container>
</template>

<script>
    import Renderer from "../../core/render"

    export default {
        components: {
            pagesTemplateRenderer: require(`./templates/renderer.vue`)
        },

        data() {
            return {
                renderer : new Renderer(),
                renderedContent: "",
                enterClass: "fade-in-leave"
            }
        },

        mounted() {
            // Initialize rendering when we get from homepage to an article page.
            window.EventBus.$on('router:after:from:home:to:article', () => {
                this.renderer.applyConfig(this.$store.state.core.config.renderer)
                this.renderedContent = this.renderer.render(this.findArticleBySlug(this.$route.params.article).content)
                this.enterClass = 'fade-in-enter'
            })

           // Initialize rendering when we get to an article page.
            window.EventBus.$on('router:after:to:article', () => {
                this.renderer.applyConfig(this.$store.state.core.config.renderer)
                this.renderedContent = this.renderer.render(this.findArticleBySlug(this.$route.params.article).content)
                this.enterClass = 'fade-in-enter'
            })
        },

        watch: {
            "$route": function (val) {
                this.renderedContent = this.renderer.render(this.findArticleBySlug(this.$route.params.article).content)
            }
        },

        methods: {
            /**
             * Find an article by its slug from the search article flat array.
             *
             * @param slug
             * @returns {*}
             */
            findArticleBySlug(slug) {
                return this.$store.state.search.flatArticles.filter(({ article }) => {
                    return article.primitive.slug === slug
                })[0].article.primitive
            }
        }
    }
</script>