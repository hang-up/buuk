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
        <li class="logo" v-if="$store.state.bootstrap.logo != ''">
            <sidebar-logo :source="$store.state.bootstrap.logo"></sidebar-logo>
        </li>

        <!-- Search input. -->
        <li>
            <search></search>
        </li>

        <!-- Introduction. -->
        <li>
            <router-link to="/" class="waves-effect waves-light">
                {{ $store.state.bootstrap.localizations.introduction }}
            </router-link>
        </li>

        <!-- List of articles. -->
        <li>
            <ul class="collapsible" data-collapsible="accordion">
                <sidebar-item v-for="(articles, category) in $store.state.articles.articles" :articles="articles" :category="category" :key="category"></sidebar-item>
            </ul>
        </li>
    </ul>
</template>

<script type="text/babel">
    import Vue from 'vue'
    import search from '../search/search.vue'
    import sidebarItem from './sidebar-item'
    import sidebarLogo  from './siderbar-logo.vue'

    export default {
        name: 'sidebar',

        components: {
            search,
            'sidebar-item': sidebarItem,
            'sidebar-logo': sidebarLogo
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