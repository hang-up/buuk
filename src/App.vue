<template>
    <v-app light>

        <!-- Sidebar. -->
        <sidebar :drawer="drawer"></sidebar>


        <!-- Toolbar. -->
        <v-toolbar dark color="primary" fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
            <v-toolbar-title v-text="$store.state.core.config.name"></v-toolbar-title>
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
        }
    }
</script>
