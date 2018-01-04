<template>
    <v-list-tile style="height: 55px">
        <v-list-tile-content>
            <v-text-field placeholder="Search here..."
                          v-model="search"
                          solo
                          single-line
                          :append-icon="search ? 'cancel' : ''"
                          :append-icon-cb="() => (search = '')"
            >
            </v-text-field>
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
    const _debounce = require('lodash/debounce')

    export default {
        data() {
            return {
                search: ""
            }
        },

        watch: {
            search(query) {
                _debounce(() => {
                    this.$store.dispatch('search/search', {
                        query
                    })
                }, 500)()
            }
        }
    }
</script>