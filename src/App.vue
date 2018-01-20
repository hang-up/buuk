<template>
    <v-app light>

        <!-- Sidebar. -->
        <sidebar :drawer="drawer"></sidebar>


        <!-- Toolbar. -->
        <toolbar></toolbar>


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
    import toolbar from './components/toolbar/toolbar.vue'

    export default {
        components: {
            sidebar,
            toolbar
        },

        data() {
            return {
                drawer: true
            }
        }
    }
</script>
