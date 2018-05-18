<style lang="scss" scoped>
    
</style>


<template>
    <div>
        <toc :headings="toc"></toc>
        <div v-html="content" :class="template"></div>
    </div>
</template>

<script>
    export default {

        components: {
            toc: () => import('./toc.vue')
        },

        props: {
            content: {
                type: String,
                default: "Uh oh! You broke it. This page does't exist or doesn't have any content... yet!"
            },
            toc: {
                type: [Array, Object]
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