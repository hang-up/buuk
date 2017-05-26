<style>
    .btn-navigator-left {
        position: fixed !important;
        left: 312px;
        top: 50%;
        transform: translateY(-50%);
    }

    .btn-navigator-right {
        position: fixed !important;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
    }
</style>

<template>
    <a class="btn-floating
              waves-effect
              waves-light
              grey lighten-2
              tooltipped
              btn-navigator-left"
       data-position="right"
       data-tooltip="Previous"
       v-if="action === 'previous'"
    >
        <i class="material-icons">keyboard_arrow_left</i>
    </a>

    <a class="btn-floating
              waves-effect
              waves-light
              grey lighten-2
              tooltipped
              btn-navigator-right"
       data-position="left"
       data-tooltip="Next"
       v-else-if="action === 'next'"
    >
        <i class="material-icons">keyboard_arrow_right</i>
    </a>
</template>

<script>
    export default {
        props: ['link', 'action']
    }
</script>