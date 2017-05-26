<template>
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
</template>

<script>
    export default {}
</script>