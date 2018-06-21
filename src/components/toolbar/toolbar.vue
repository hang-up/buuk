<style lang="scss">
.toolbar__title h1 {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.4px;
    font-weight: 500;
}
</style>

<template>
    <v-toolbar app :style="toolbarStyle">
        <v-toolbar-title>
            <h1>{{$store.state.pages.currentArticle.name}}</h1>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-tooltip bottom>
            <v-btn icon slot="activator" @click.stop="updateDrawerState">
                <v-icon>fullscreen</v-icon>
            </v-btn>
            <span>Full screen</span>
        </v-tooltip>

        <v-tooltip bottom>
            <v-btn icon slot="activator" @click="print">
                <v-icon>print</v-icon>
            </v-btn>
            <span>Print</span>
        </v-tooltip>

    </v-toolbar>
</template>

<script>
export default {
    props: ['drawer'],

    data() {
        return {
            toolbarStyle: {
                borderTop: `3px solid ${this.$store.state.core.config.theme_color}`,
                boxShadow: '0 0 1px rgba(0,0,0,0.25)',
                background: '#fafafa'
            }
        }
    },

    mounted() {
        window.EventBus.$on('router:after:to:home', () => {
            this.$store.commit('pages/setCurrentArticle', {
                currentArticle: {
                    name: this.$store.state.core.config.name
                }
            })
        })
    },

    methods: {
        print() {
            window.print()
        },

        updateDrawerState() {
            this.$emit('update:drawer', !this.drawer)
        }
    }
}
</script>