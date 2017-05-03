<style scoped>
    @media screen and (min-width:992px){
        main {
            padding-left: 300px;
        }
    }
</style>

<template>
    <div>
        <!-- Menu. -->
        <sidebar></sidebar>

        <main>
            <div class="container">

                <!-- Mobile menu trigger. -->
                <a href="#"
                   data-activates="nav-mobile"
                   class="top-nav waves-effect waves-light hide-on-large-only btn button-collapse"
                   style="margin-top: 19.25px">
                    <i class="material-icons left">menu</i>
                    Menu
                </a>

                <div class="row">
                    <!-- Article. -->
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
            sidebar: require('./components/sidebar/sidebar.vue'),
            articleContainer: require('./components/articles/article-container.vue')
        },

        mounted() {
            $(".button-collapse").sideNav();
        }
    }
</script>
