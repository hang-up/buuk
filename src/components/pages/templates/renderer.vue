<template>
    <div v-html="content" :class="template"></div>
</template>

<script>
    export default {

        /* TODO: Maybe we should create a style-loader... to load primer AND template specific style?
            AND move that font-family styling into that primer.
         */
        props: {
            content: {
                type: String,
                default: "Uh oh! You broke it. This page does't exist or doesn't have any content... yet!"
            }
        },

        data() {
            return {
                // We'll assume the default template is a wiki.
                template: 'wiki'
            }
        },

        mounted() {
            window.EventBus.$on('route:from:home:to:article', () => {
                this.template = this.$store.state.core.config.renderer.template
            })

            window.EventBus.$on('route:to:article', () => {
                this.template = this.$store.state.core.config.renderer.template
            })
        }
    }
</script>