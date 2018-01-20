<template>
    <v-container fluid :class="activeClass" class="pages-container wiki">
        <v-layout column>
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

        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-toolbar dark>
                        <v-toolbar-title>All articles</v-toolbar-title>
                    </v-toolbar>
                    <v-list>
                        <v-list-tile v-for="item in $store.state.search.flatArticles"
                                     v-bind:key="item.article.slug" @click="$router.push({ name:'article', params: { article: item.article.slug } })">
                            <v-list-tile-content>
                                <v-list-tile-title v-text="item.article.primitive.name"></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>

        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                activeClass: "fade-in-leave"
            }
        },

        mounted() {
            window.setTimeout(() => {
                this.activeClass = "fade-in-enter"
            }, 250)
        }
    }
</script>