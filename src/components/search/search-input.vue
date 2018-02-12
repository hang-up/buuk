<template>
    <v-list-tile style="height: 56px; border-bottom: 1px solid rgba(0,0,0,.1);">
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

        // https://vuex.vuejs.org/en/forms.html: Two-way computed property.
        computed: {
            search: {
                get() {
                    return this.$store.state.search.query
                },

                set(query) {
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
    }
</script>