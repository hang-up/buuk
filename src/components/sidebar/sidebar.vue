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
            v-model="proxyDrawerState"
            app
            :style="navigationDrawerStyle"
    >
        <!-- Logo -->
        <sidebar-logo v-if="$store.state.core.config.logo"></sidebar-logo>

        <v-list style="padding-top: 0;">
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
    props: {
        drawer: {
            type: Boolean,
            required: true
        }
    },

    data() {
        return {
            // proxyDrawerState is used to avoid mutating directly the drawer parent prop.
            // Since v-navigation-drawer doesn't have an onClose hook, we are v-model-ing
            // this to the drawer and watching for changes so we can emit them back to
            // the parent. Hackish af.
            proxyDrawerState: this.drawer,

            navigationDrawerStyle: {
                borderTop: `3px solid ${this.$store.state.core.config.theme_color}`
            }
        }
    },

    watch: {
        proxyDrawerState(val, old) {
            this.$emit('update:drawer', this.proxyDrawerState)
        },

        // We need to watch for the prop to change so we can update the local state
        // with whatever the parent has.
        drawer(val, old) {
            this.proxyDrawerState = this.drawer
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