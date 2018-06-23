<template>
    <div>
        <toc :headings="toc" v-if="$store.state.core.config.toc"></toc>
        <div v-html="content" :class="template"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

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

    computed: {
        ...mapState('core', ['config'])
    },

    data() {
        return {
            // Default template is a wiki.
            template: 'wiki'
        }
    },

    mounted() {
        window.EventBus.$on('router:after:from:home:to:article', () => {
            this.template = this.config.renderer.template
        })

        window.EventBus.$on('router:after:to:article', () => {
            this.template = this.config.renderer.template
        })
    }
}
</script>