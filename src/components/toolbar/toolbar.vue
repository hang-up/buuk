<template>
    <v-toolbar dark app :style="{ background: $store.state.core.config.theme_color }">
        <v-toolbar-title v-text="$store.state.core.config.name"></v-toolbar-title>
        <v-spacer></v-spacer>

        <v-tooltip bottom>
            <v-btn icon slot="activator" @click.stop="drawer = !drawer">
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
        methods: {
            print() {
                window.print()
            }
        }
    }
</script>