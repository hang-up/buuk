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