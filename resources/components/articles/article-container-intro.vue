<style scoped>
    .collection a.collection-item {
        color: rgba(0, 0, 0, 0.87)
    }
</style>

<template>
    <div>
        <!-- Search results. -->
        <search-results v-if="$store.state.query"></search-results>

        <!-- Article. -->
        <div class="col s12"
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

            <br>

            <h4 class="header">Progression status</h4>
            <div class="progress">
                <div class="determinate" style="width: 0%"></div>
            </div>

            <ul class="collection with-header">
                <li class="collection-header"><h5>What's new in 2.1?</h5></li>

                <li class="collection-item">
                    <i class="tiny material-icons green darken-1" style="color: #fff;">done</i>
                    Improve code snippets
                </li>

                <li class="collection-item">
                    Improve readability (Github style?)
                </li>

                <li class="collection-item">
                    Allow custom css styling
                </li>

                <li class="collection-item">
                    Full screen layout - different sidebar width
                </li>

            </ul>

            <ul class="collection with-header">
                <li class="collection-header"><h5>Upcoming in > 2.1</h5></li>

                <li class="collection-item">
                    Improve introduction page (list all nested articles)
                </li>

                <li class="collection-item">
                    Previous / Next shortcut
                </li>

                <li class="collection-item">
                    Keyboard previous / next shortcut
                </li>

                <li class="collection-item">
                    Localize hard coded string
                </li>

            </ul>

            <!--<ul class="collection with-header">-->
                <!--<li class="collection-header"><h4>All articles</h4></li>-->
                <!--<router-link v-for="article in this.$store.state.searchArticles"-->
                             <!--:to="article.slug"-->
                             <!--class="collection-item"-->
                <!--&gt;-->
                    <!--{{ article.title }}-->
                <!--</router-link>-->
            <!--</ul>-->

        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        components: {
            searchResults: require('../search/search-results.vue')
        },

        mounted() {
            // Clear up search everytime we load a new article.
            this.$store.dispatch('resetSearch')
        }
    }
</script>