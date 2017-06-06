<style scoped>
    .side-nav {
        overflow-x: hidden;
    }

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

    li.logo {
        padding: 2rem 0;
    }
</style>

<template>
    <ul class="side-nav fixed" id="nav-mobile">

        <!-- Logo. -->
        <li class="logo" v-if="this.$store.state.logo">
            <sidebar-logo :source="this.$store.state.logo"></sidebar-logo>
        </li>

        <!-- Search input. -->
        <li>
            <search></search>
        </li>

        <!-- Introduction. -->
        <li>
            <router-link to="/" class="waves-effect waves-light">
                {{ $store.state.localizations.introduction }}
            </router-link>
        </li>

        <!-- List of articles. -->
        <li>
            <ul class="collapsible" data-collapsible="accordion">
                <sidebar-item v-for="(articles, category) in $store.state.articles" :articles="articles" :category="category"></sidebar-item>
            </ul>
        </li>
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