<template>
    <div>
        <!-- Load sidebar -->
        <sidebar></sidebar>

        <div class="pusher" style="width: calc(100% - 260px)">
            <div class="ui container">
                <!-- Article container will be loaded here. -->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        components: {
            sidebar: require('./components/sidebar.vue'),
            articleContainer: require('./components/article-container.vue')
        }
    }
</script>
