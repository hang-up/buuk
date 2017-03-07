<style scoped>
    .pusher.isSidebarCentered {
        width: calc(100% - 260px)
    }
</style>

<template>
    <div>
        <!-- Load menu -->
        <sidebar></sidebar>

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

        components: {
            sidebar: require('./components/sidebar.vue'),
            articleContainer: require('./components/article-container.vue')
        }
    }
</script>
