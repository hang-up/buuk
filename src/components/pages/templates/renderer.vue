<style lang="scss" scoped>
    .toc {
        display: table;

        ul {
            list-style-type: none;
            li.heading {
                &-2 {
                    margin-left: 17px;
                }
                &-3 {
                    margin-left: 32px;
                }
                &-4 {
                    margin-left: 40px;
                }
        }
        }
    }
</style>


<template>
    <div>
        <div class="toc">
            <ul>
                <li v-for="heading in toc" :key=heading.text :class="`heading-${heading.level}`">
                    {{ heading.text }}
                </li>
            </ul>
        </div>
        <div v-html="content" :class="template"></div>
    </div>
</template>

<script>
    export default {

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