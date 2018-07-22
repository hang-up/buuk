<template>
    <v-app light>

        <!-- Sidebar. -->
        <sidebar :drawer="drawer"></sidebar>


        <!-- Toolbar. -->
        <toolbar :drawer.sync="drawer"></toolbar>


        <!-- Content. -->
        <v-content>
            <router-view></router-view>
        </v-content>


    </v-app>
</template>

<script>
import sidebar from './components/sidebar/sidebar.vue'
import toolbar from './components/toolbar/toolbar.vue'
import { viewportService } from './core/services/viewport-service.js'

export default {
    components: {
        sidebar,
        toolbar
    },

    data() {
        return {
            drawer: viewportService.isMobileViewport() ? false : true
        }
    }
}
</script>
