<template>
    <v-toolbar flat style="background-color: #fff">
        <v-list>
            <v-list-tile>
                <v-list-tile-title style="height: 48px">
                    <img :src="logoRelativePath" alt="Bük" style="height: 100%; display: block; margin: 0 auto;">
                </v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-toolbar>
</template>

<script>
    export default {
        computed: {
            logoRelativePath() {
                return `static/img/${this.$store.state.core.config.logo}`
            }
        }
    }
</script>