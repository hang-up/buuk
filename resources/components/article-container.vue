<template>
    <div class="ui text container" v-html="file" style="margin-top: 5rem; margin-bottom: 5rem;">
    </div>
</template>

<script type="text/babel">
    const md = require('markdown-it')({
        breaks: true,
        typographer: true
    }).use(require('markdown-it-center-text'))

    export default {
        data() {
            return {
                file: ""
            }
        },

        // We need to watch route and re-render since every page loads a different .md file.
        watch: {
            '$route' : 'requiring'
        },

        mounted() {
            this.requiring()
        },

        methods: {
            requiring() {
                this.file = md.render(require(`../assets/${this.$route.params.article}.md`))
                console.log("suck")
            }
        }
    }
</script>