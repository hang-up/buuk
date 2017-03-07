<style scoped>
    main {
        padding-left: 300px;
    }
</style>

<template>
    <div>
        <!-- Load menu -->
        <sidebar></sidebar>

        <main>
            <div class="container">
                <div class="row">
                    <!-- Article container will be loaded here. -->
                    <router-view></router-view>
                </div>
            </div>
        </main>

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
