<template>
    <v-container fluid :class="activeClass" class="pages-container">
        <v-layout column 
                align-center 
                v-if="!$store.state.core.config.homepage" 
                class="wiki" 
                style="margin: 0 auto"
        >
            <h1>
                {{ $store.state.core.config.name }}
            </h1>
            <h2>
                {{ $store.state.core.config.short_name }}
            </h2>
            <p>
                {{ $store.state.core.config.description }}
            </p>

            <hr>
        </v-layout>

        <v-layout row align-center v-if="!$store.state.core.config.homepage">
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-toolbar dark>
                        <v-toolbar-title>All articles</v-toolbar-title>
                    </v-toolbar>
                    <v-list>
                        <v-list-tile v-for="item in $store.state.search.flatArticles"
                                     v-bind:key="item.article.slug"
                                     @click="$router.push({ name:'article', params: { article: item.article.slug } })">
                            <v-list-tile-content>
                                <v-list-tile-title v-text="item.article.primitive.name"></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout column align-center v-if="$store.state.core.config.homepage">
            <pages-template-renderer 
                :content="renderedContent.content" 
                :toc="renderedContent.artifacts"
            ></pages-template-renderer>
        </v-layout>
    </v-container>
</template>

<script>
    import Renderer from "../../../core/render"
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                activeClass: "fade-in-leave",
                renderer : new Renderer({options: ['toc']}),
                renderedContent: ''
            }
        },

        computed: {
            ...mapState('core', ['config', 'homepage'])
        },

        components: {
            pagesTemplateRenderer: () => import(`./renderer.vue`)
        },

        mounted() {
            // If a homepage article is set, we render it here.
            if (this.config.homepage) {
                this.renderer.applyConfig(this.config.renderer)
                this.renderedContent = this.renderer.render(this.homepage.content)
            }

            window.setTimeout(() => {
                this.activeClass = "fade-in-enter"
            }, 250)
        }
    }
</script>