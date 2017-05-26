<template>
    <div class="fixed-action-btn click-to-toggle horizontal hide-on-med-and-down">
        <a class="btn-floating btn-large red">
            <i class="material-icons">menu</i>
        </a>
        <ul>
            <li><a class="btn-floating blue btn-fullScreen tooltipped"
                   @click="toggleFullScreen"
                   data-position="top"
                   data-delay="50"
                   data-tooltip="Toogle fullscreen">
                <i class="material-icons">fullscreen</i>
            </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
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