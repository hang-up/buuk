<template>
    <div class="collection" v-if="$store.state.searchResults.length && $store.state.query">
        <router-link :to="article.slug"
                     v-on:click.native="clearSearch"
                     class="collection-item"
                     v-for="article in $store.state.searchResults"
        >
            <span>{{ article.title }}</span>
        </router-link>
    </div>
    <ul class="collection" v-else-if="!$store.state.searchResults.length && $store.state.query != ''">
       <li class="collection-item">No result found</li>
    </ul>
</template>

<script type="text/babel">
    export default {
        props: ['q'],

        methods: {
            clearSearch() {
                this.$emit('update:q', "")
                this.$store.dispatch('resetSearch')
            }
        }
    }
</script>