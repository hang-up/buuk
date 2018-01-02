<template>
    <v-app light>

        <sidebar :fixed="fixed" :mini-variant="miniVariant" :clipped="clipped" :drawer="drawer"></sidebar>


        <v-toolbar dark dense color="primary" fixed app :clipped-left="clipped">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer v-if="!showSearchBar"></v-spacer>

            </v-btn>
            <v-btn
                    icon
                    dark
                    @click.stop="miniVariant = !miniVariant"
            >
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
        </v-toolbar>

        <v-content>
            <router-view></router-view>
        </v-content>


        <v-footer :fixed="fixed" app>
            <span>&copy; 2017</span>
        </v-footer>
    </v-app>
</template>

<script>
    import sidebar from './components/sidebar/sidebar.vue'

    export default {
        components: {
            sidebar
        },

        data() {
            return {
                clipped: false,
                drawer: true,
                fixed: false,
                items: [{
                    icon: 'bubble_chart',
                    title: 'Inspire'
                }],
                miniVariant: false,
                title: 'Bük 4'
            }
        }
    }
</script>
