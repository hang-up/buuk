<template>
    <div v-html="content" :class="template"></div>
</template>

<script>
    export default {

        props: {
            content: {
                type: String,
                default: "Uh oh! You broke it. This page does't exist or doesn't have any content... yet!"
            }
        },

        data() {
            return {
                // Default template is a wiki.
                template: 'wiki'
            }
        },

        mounted() {
            window.EventBus.$on('router:after:from:home:to:article', () => {
                this.template = this.$store.state.core.config.renderer.template
            })

            window.EventBus.$on('router:after:to:article', () => {
                this.template = this.$store.state.core.config.renderer.template
            })
        }
    }
</script>