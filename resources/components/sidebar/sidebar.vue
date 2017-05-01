<style scoped>
    .side-nav .collapsible-body {
        padding: 0;
    }

    ul.side-nav.fixed ul.collapsible .collapsible-body li a {
        font-weight: 400;
        padding: 0 37.5px 0 45px;
    }

    .bold>a {
        font-weight: bold;
    }

    .collapsible-header {
        padding-left: 32px !important;
    }
</style>

<template>
    <ul class="side-nav fixed" id="nav-mobile">

        <!-- Search input. -->
        <search></search>

        <!-- Introduction. -->
        <li>
            <router-link to="/" class="waves-effect waves-light">
                Introduction
            </router-link>
        </li>

        <!-- List of articles. -->
        <sidebar-item v-for="(articles, category) in $store.state.articles" :articles="articles" :category="category"></sidebar-item>
    </ul>
</template>

<script type="text/babel">
    const Vue = require('vue')

    export default {
        name: 'sidebar',

        components: {
            search: require('../search/search.vue'),
            'sidebar-item': require('./sidebar-item.vue')
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