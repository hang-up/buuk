<template>
    <v-app light>

        <sidebar :fixed="fixed" :mini-variant="miniVariant" :clipped="clipped" :drawer="drawer"></sidebar>

        <v-toolbar fixed app :clipped-left="clipped">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
            <v-btn
                    icon
                    light
                    @click.stop="miniVariant = !miniVariant"
            >
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
            <v-btn
                    icon
                    light
                    @click.stop="clipped = !clipped"
            >
                <v-icon>web</v-icon>
            </v-btn>
            <v-btn
                    icon
                    light
                    @click.stop="fixed = !fixed"
            >
                <v-icon>remove</v-icon>
            </v-btn>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
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
                title: 'Vuetify.js'
            }
        }
    }
</script>
