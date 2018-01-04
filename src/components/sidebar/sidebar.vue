<template>
    <v-navigation-drawer
            fixed
            :clipped="clipped"
            v-model="drawer"
            app
    >
        <v-list>
            <search-input></search-input>

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
    import searchInput from '../search/search-input.vue'

    export default {
        props: ['fixed', 'clipped', 'drawer'],

        components: {
            sidebarItem,
            searchInput
        }
    }
</script>