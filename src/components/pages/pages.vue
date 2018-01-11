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
            // I am ashamed of myself, this is disgusting...
            let mountedRender = setInterval(() => {
                this.renderedContent = this.renderer.render(this.findArticleBySlug(this.$route.params.article).content)
                if (this.renderedContent !== "" ) clearInterval(mountedRender)
            }, 100)
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