<template>
    <v-data-table
            style="position: absolute; z-index:10"
            v-show="$store.state.search.results.results && $store.state.search.results.results.length"
            :items="$store.state.search.results.results"
            :headers="headers"
            hide-actions
            class="elevation-1"
            no-results-text="No results found"
    >
        <template slot="items" slot-scope="props">
            <td><strong>{{ props.item.article.primitive.name }}</strong></td>
            <td>{{ props.item.article.primitive.content.substring(0, 50) + '...' }}</td>
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
                        sortable: false
                    },
                    {
                        text: 'Preview',
                        align: 'left',
                        sortable: false
                    }
                ]
            }
        }
    }
</script>