<style scoped>
    main, #nav-mobile {
        transition: all .3s ease-in;
    }

    @media screen and (min-width: 992px) {
        main {
            margin-left: 300px;
        }
    }
</style>

<template>
    <div>
        <!-- Menu. -->
        <sidebar></sidebar>

        <main>

            <!-- Navigation -->
            <navigation></navigation>

            <div class="container">
                <!-- Floating action button -->
                <fab :is-full-screen.sync="isFullScreen"></fab>

                <!-- Mobile menu trigger. -->
                <a href="#"
                   data-activates="nav-mobile"
                   class="top-nav waves-effect waves-light hide-on-large-only btn button-collapse"
                   id="nav-mobile-trigger"
                   style="margin-top: 19.25px">
                    <i class="material-icons left">menu</i>
                    Menu
                </a>

                <!-- Article. -->
                <router-view></router-view>
            </div>
        </main>

    </div>
</template>

<script>
    import fab from './js/components/articles/fab.vue'
    import sidebar from './js/components/sidebar/sidebar.vue'
    import articleContainer from './js/components/articles/article-container.vue'
    import navigation from './js/components/navigation/navigation.vue'

    export default {
        name: 'app',
        data() {
            return {
                isFullScreen: false
            }
        },
        components: {
            fab,
            sidebar,
            articleContainer,
            navigation
        },
        mounted() {
            /**
             * Initialize mobile menu trigger.
             *
             */
            $(".button-collapse").sideNav({
                draggable: true
            })
            /**
             * Initialize tooltip.
             *
             */
            $('.tooltipped').tooltip({delay: 50});
        }
    }
</script>