<template>
    <div id="wrapper">
        <!-- Article. -->
        <div class="col s12">
            <h1>
                {{ $store.state.bootstrap.short_name }}
            </h1>
            <h4>
                {{ $store.state.bootstrap.name }}
            </h4>
            <p>
                {{ $store.state.bootstrap.sub }}
            </p>

            <br>

            <ul class="collection with-header">
                <li class="collection-header"><h4>{{ $store.state.bootstrap.localizations.all_articles }}</h4></li>
                <router-link v-for="article in $store.state.search.searchArticles"
                             :key="article.slug"
                             :to="article.slug"
                             class="collection-item"
                >
                    {{ article.title }}
                </router-link>
            </ul>

        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        components: {
            searchResults: require('../search/search-results.vue')
        },

        mounted() {
            // Clear up search every time we load a new article.
            this.$store.dispatch('search/resetSearch')
        }
    }
</script>