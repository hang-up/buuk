<style scoped>
    #logo-container:hover, #logo-container:active, #logo-container:focus {
        background-color: rgba(0, 0, 0, 0);
    }
</style>

<template>
    <a id="logo-container" href="/" class="brand-logo">
        <img :src="source">
    </a>
</template>

<script>
    export default {
        props: ['source']
    }
</script>