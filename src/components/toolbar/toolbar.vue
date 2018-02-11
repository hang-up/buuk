<template>
    <v-toolbar dark app :style="{ background: $store.state.core.config.theme_color }">
        <v-toolbar-title v-text="$store.state.pages.currentArticle.name"></v-toolbar-title>
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
        props: ["drawer"],

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