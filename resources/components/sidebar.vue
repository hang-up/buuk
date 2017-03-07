<style scoped>
    .side-nav .collapsible-body {
        padding: 0;
    }

    ul.side-nav.fixed ul.collapsible .collapsible-body li a {
        font-weight: 400;
        padding: 0 37.5px 0 45px;
    }
</style>

<template>
    <ul class="side-nav fixed" id="nav-mobile">

        <search></search>

        <li>
            <router-link to="/" class="waves-effect waves-light">
                Introduction
            </router-link>
        </li>


        <li class="no-padding">
            <ul class="collapsible" v-for="(articles, category) in $store.state.articles">
                <li>
                    <a class="collapsible-header waves-effect waves-teal">{{ category }}<i class="material-icons">arrow_drop_down</i></a>
                    <div class="collapsible-body">
                        <ul>
                            <li>
                                <router-link :to="article.slug"
                                             v-for="article in articles"
                                             class="waves-effect waves-light"
                                >
                                    {{ article.title }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

            </ul>
        </li>
    </ul>
</template>

<script type="text/babel">
    const Vue = require('vue')

    export default {
        name: 'sidebar',

        components: {
            search: require('./search.vue')
        },

        mounted() {
            Vue.nextTick(() => {
                $('.collapsible').collapsible({
                    accordion: false
                })
            })
        }
    }
</script>