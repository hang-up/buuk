<template>
    <v-navigation-drawer
            fixed
            :clipped="clipped"
            v-model="drawer"
            app
    >
        <v-list>
            <v-list-tile style="height: 55px">
                <v-list-tile-content>
                    <v-text-field placeholder="Search here..."
                                  v-model="search"
                                  solo
                                  single-line
                                  :append-icon="search ? 'cancel' : ''"
                                  :append-icon-cb="() => (search = '')"
                                 >
                    </v-text-field>
                </v-list-tile-content>
            </v-list-tile>

            <v-divider></v-divider>

            <li>
                <ul id="sidebar-items">
                    <sidebar-item v-for="(articles, rootCategory) in $store.state.core.articles"
                                  :category="rootCategory"
                                  :articles="articles"></sidebar-item>
                </ul>
            </li>

        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import sidebarItem from './sidebar-item.vue'

    export default {
        props: ['fixed', 'clipped', 'drawer'],

        components: {
            sidebarItem
        },

        data() {
            return {
                search: ""
            }
        }
    }
</script>