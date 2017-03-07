<template>
    <div>
        <!-- Load menu -->
        <sidebar></sidebar>

        <!--<div class="pusher">-->
            <!--<div class="ui container">-->
                <!--&lt;!&ndash; Article container will be loaded here. &ndash;&gt;-->
                <!--<router-view></router-view>-->
            <!--</div>-->
        <!--</div>-->
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
