<template>
    <div>
        <!-- Search results. -->
        <search-results v-if="$store.state.query"></search-results>

        <!-- Article. -->
        <div class="col s12"
             style="margin-top: 5rem; margin-bottom: 5rem;"
             v-else>
            <h1>
                {{ $store.state.app }}
            </h1>
            <h4>
                {{ $store.state.description }}
            </h4>
            <p>
                {{ $store.state.sub }}
            </p>

            <ul class="collection with-header" v-for="(articles, category) in $store.state.articles">
                <li class="collection-header"><h4>{{ category }}</h4></li>
                <router-link v-for="article in articles"
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
            searchResults: require('./search-results.vue')
        },

        mounted() {
            // Clear up search everytime we load a new article.
            this.$store.dispatch('resetSearch')
        }
    }
</script>