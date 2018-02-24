<style lang="scss">
    .sidebar a {
        text-decoration: none;
        color: #7f8c8d !important;
    }
</style>

<template>
    <v-navigation-drawer
            class="sidebar"
            fixed
            :clipped="clipped"
            v-model="drawer"
            app
    >
        <!-- Logo -->
        <sidebar-logo v-if="$store.state.core.config.logo"></sidebar-logo>

        <v-list :style="listStyle">
            <!-- Search input -->
            <search-input></search-input>

            <!-- Search results -->
            <li>
                <searchResults></searchResults>
            </li>

            <!-- Homepage link -->
            <sidebar-intro-link></sidebar-intro-link>

            <!-- Articles tree -->
            <li>
                <ul id="sidebar-items">
                    <sidebar-item v-for="(articles, rootCategory) in $store.state.core.articles"
                                  :key="rootCategory"
                                  :category="rootCategory"
                                  :articles="articles"></sidebar-item>
                </ul>
            </li>

        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import sidebarLogo from './sidebar-logo.vue'
    import sidebarItem from './sidebar-item.vue'
    import sidebarIntroLink from './sidebar-intro-link.vue'
    import searchInput from '../search/search-input.vue'
    import searchResults from '../search/search-results.vue'

    export default {
        props: ['fixed', 'clipped', 'drawer'],

        data() {
            return {
                listStyle: {
                    paddingTop: 0,
                    borderTop: `3px solid ${this.$store.state.core.config.theme_color}`
                }
            }
        },

        components: {
            sidebarLogo,
            sidebarItem,
            sidebarIntroLink,
            searchInput,
            searchResults
        }
    }
</script>