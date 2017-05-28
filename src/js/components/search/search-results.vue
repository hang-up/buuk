<style scoped>
    .collection {
        position: absolute;
        width: 100%;
        z-index: 2;
        margin-top: 0;
        border: none;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }
</style>

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
       <li class="collection-item">{{ $store.state.localizations.no_result }}</li>
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