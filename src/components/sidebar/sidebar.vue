<style lang="scss">
    .sidebar a {
        text-decoration: none;
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
        <v-list>
            <search-input></search-input>

            <li>
                <searchResults></searchResults>
            </li>

            <sidebar-intro-link></sidebar-intro-link>

            <v-divider></v-divider>

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
    import sidebarItem from './sidebar-item.vue'
    import sidebarIntroLink from './sidebar-intro-link.vue'
    import searchInput from '../search/search-input.vue'
    import searchResults from '../search/search-results.vue'

    export default {
        props: ['fixed', 'clipped', 'drawer'],

        components: {
            sidebarItem,
            sidebarIntroLink,
            searchInput,
            searchResults
        }
    }
</script>