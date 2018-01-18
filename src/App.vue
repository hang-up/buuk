<template>
    <v-app light>

        <!-- Sidebar. -->
        <sidebar :drawer="drawer"></sidebar>


        <!-- Toolbar. -->
        <v-toolbar dark color="primary"  app>
            <v-toolbar-title v-text="$store.state.core.config.name"></v-toolbar-title>
            <v-spacer></v-spacer>

            <v-tooltip bottom>
                <v-btn icon slot="activator" @click.stop="drawer = !drawer">
                    <v-icon>fullscreen</v-icon>
                </v-btn>
                <span>Full screen</span>
            </v-tooltip>

            <v-tooltip bottom>
                <v-btn icon slot="activator" @click="print">
                    <v-icon>print</v-icon>
                </v-btn>
                <span>Print</span>
            </v-tooltip>

        </v-toolbar>


        <!-- Content. -->
        <v-content>
            <router-view></router-view>
        </v-content>


        <!-- Footer. -->
        <v-footer app>
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
                drawer: true
            }
        },

        methods: {
            print() {
                window.print()
            }
        }
    }
</script>
