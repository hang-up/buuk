<template>
    <v-data-table
            style="position: absolute; z-index:10"
            v-show="$store.state.search.query"
            :items="$store.state.search.results"
            :headers="headers"
            hide-actions
            class="elevation-1"
            no-results-text="No results found"
    >
        <template slot="items" slot-scope="props">
            <td><strong>{{ props.item.article.primitive.name }}</strong></td>
            <td>{{ props.item.article.primitive.content.substring(0, 50) + '...' }}</td>
        </template>

        <template slot="no-data">
            <v-alert :value="true" color="info" icon="info" outline>
                No results
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
        }
    }
</script>