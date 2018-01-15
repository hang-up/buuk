<style lang="scss">
    .wiki {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 14.5px;

        p, blockquote, pre, ol, ul {
            margin-top: 0;
            line-height: 1.7;
            letter-spacing: -.021em;
        }

        ul, ol {
            padding-left: 2em;

            li {
                margin: 8px;
                line-height: 1.65;
            }

            li+li {
                margin-top: 0.25em;
            }
        }

        /* Titles */
        h1 {
            font-size: 45px;
            font-weight: 400;
            margin: 0.67em 0;
        }

        h2 {
            font-size: 30px;
            font-weight: 400;
            margin-top: 55px;
            margin-bottom: 15px;
            position: relative;

            &:first-of-type {
                margin-top: 15px;
             }
        }

        h3 {
            font-size: 24px;
            font-weight: 400;
            margin-top: 45px;
            margin-bottom: 10px;
        }

        h4 {
            font-size: 16px;
            font-weight: 700;
            margin-top: 35px;
            margin-bottom: 10px;
        }

        /* Code blocks */
        pre {
            margin: 10px 0 20px;
            overflow: auto;
            border-radius: 3px;
            padding: 10px 0;
        }

        :not(pre) > code {
            padding: 1px 5px;
            border-radius: 3px;
        }
    }
</style>

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