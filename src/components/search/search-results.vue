<template>
    <v-data-table
            style="position: absolute; z-index:10"
            v-show="$store.state.search.query"
            :items="$store.state.search.results"
            :headers="headers"
            hide-actions
            class="elevation-1"
    >
        <template slot="items" slot-scope="props">
            <td>
                <strong>
                    <router-link
                            :to="{ name: 'article', params: { article: props.item.article.primitive.slug }}"
                            v-on:click.native="clearSearch">
                        {{ props.item.article.primitive.name }}
                    </router-link>
                </strong>
            </td>
            <td>
                <router-link
                        :to="{ name: 'article', params: { article: props.item.article.primitive.slug }}"
                        v-on:click.native="clearSearch">
                    {{ props.item.article.primitive.content.substring(0, 50) + '...' }}
                </router-link>
            </td>
        </template>

        <template slot="no-data">
            <v-alert :value="true" color="info" icon="info" outline>
                No results were found for '{{ this.$store.state.search.query }}'
            </v-alert>
        </template>
    </v-data-table>
</template>

<script>
    export default {
        data() {
            return {
                headers: [
                    {
                        text: 'Article',
                        align:'left',
                        sortable: false
                    },
                    {
                        text: 'Preview',
                        align: 'left',
                        sortable: false
                    }
                ]
            }
        },

        methods: {
            clearSearch() {
                this.$store.commit('search/setQuery', {
                    query: ''
                })
            }
        }
    }
</script>