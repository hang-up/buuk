<style scoped>
    .pusher.isSidebarCentered {
        width: calc(100% - 260px)
    }
</style>

<template>
    <div>
        <!-- Load menu -->
        <sidebar v-if="!isMobile"></sidebar>
        <mobile-menu v-else></mobile-menu>

        <div class="pusher" v-bind:class="{ isSidebarCentered: !isMobile }">
            <div class="ui container">
                <!-- Article container will be loaded here. -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',

        data() {
            return {
                isMobile: false
            }
        },

        components: {
            sidebar: require('./components/sidebar.vue'),
            articleContainer: require('./components/article-container.vue'),
            mobileMenu: require('./components/mobile-menu.vue')
        },

        mounted() {
            window.innerWidth < 425 ? this.isMobile = true : null
        }
    }
</script>
