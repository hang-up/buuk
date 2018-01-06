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
            /**
             * Watch 'search' data so we can apply the right mutation and dispatch the right action.
             *
             * @param query
             */
            search(query) {

                // Slightly debounce a sort of costly op.
                _debounce(() => {
                    // Set query mutation.
                    this.$store.commit('search/setQuery', {
                        query
                    })

                    // Dispatch the search action.
                    this.$store.dispatch('search/search')
                }, 50)()
            }
        }
    }
</script>