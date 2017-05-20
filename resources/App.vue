<style scoped>
    main {
        transition: all 0.2s ease-out;
    }

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
                <!-- Action bar for desktop layout only. TODO:Will be moved into its own component in 3.x -->
                <div class="fixed-action-btn click-to-toggle hide-on-med-and-down">
                    <a class="btn-floating red">
                        <i class="material-icons">menu</i>
                    </a>
                    <ul>
                        <li><a class="btn-floating blue btn-fullScreen tooltipped"
                               @click="toggleFullScreen"
                               data-position="left"
                               data-delay="50"
                               data-tooltip="Toogle fullscreen">
                                <i class="material-icons">fullscreen</i>
                            </a>
                        </li>
                    </ul>
                </div>


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

        data() {
            return {
                isFullScreen: false
            }
        },

        components: {
            sidebar: require('./components/sidebar/sidebar.vue'),
            articleContainer: require('./components/articles/article-container.vue')
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
        },

        methods: {
            /**
             * Toggle full screen.
             */
            toggleFullScreen() {
                this.isFullScreen = !this.isFullScreen

                // This is not data driven. It's gross.
                switch(this.isFullScreen) {
                    case true:
                        $('#nav-mobile').css('transform', 'translateX(-300px)')
                        $("main").css("padding-left", 0)
                        break
                    default:
                        $('#nav-mobile').css('transform', 'translateX(0px)')
                        $("main").css("padding-left", 300)
                }
            }
        }
    }
</script>
