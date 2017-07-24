<template>
    <div class="fixed-action-btn click-to-toggle horizontal hide-on-med-and-down">
        <a class="btn-floating btn-large red">
            <i class="mi mi-menu"></i>
        </a>
        <ul>
            <li>
                <a class="btn-floating green btn-print tooltipped"
                   @click="print"
                   data-position="top"
                   data-delay="50"
                   :data-tooltip="$store.state.bootstrap.localizations.print">
                    <i class="mi mi-print"></i>
                </a>
            </li>
            <li>
                <a class="btn-floating blue btn-fullScreen tooltipped"
                   @click="toggleFullScreen"
                   data-position="top"
                   data-delay="50"
                   :data-tooltip="$store.state.bootstrap.localizations.toggle_fs">
                    <i class="mi mi-fullscreen"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['isFullScreen'],

        methods: {
            /**
             * Toggle full screen.
             */
            toggleFullScreen() {
                // Eventually this isFullScreen variable will be of use in other places...
                // Should we move it to the store in that case?
                this.$emit('update:isFullScreen', !this.isFullScreen)

                // This is not data driven. It's gross.
                switch(this.isFullScreen) {
                    case false:
                        $('#nav-mobile').css('transform', 'translateX(-300px)')
                        $("main").css("margin-left", 0)
                        break
                    default:
                        $('#nav-mobile').css('transform', 'translateX(0px)')
                        $("main").css("margin-left", 300)
                }
            },

            /**
             * Print the page.
             *
             */
            print() {
                window.print()
            }
        }
    }
</script>