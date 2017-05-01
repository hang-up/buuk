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
                <div class="determinate" style="width: 20%"></div>
            </div>

            <ul class="collection with-header">
                <li class="collection-header"><h5>What's new in 2.0?</h5></li>

                <li class="collection-item">
                    Previous / Next shortcut
                </li>
                <li class="collection-item">
                    <i class="tiny material-icons orange darken-1" style="color: #fff;">done</i>
                    Infinite categories nesting
                </li>
                <li class="collection-item">
                    Automated slug generation
                </li>
                <li class="collection-item">
                    New article render function (ability to set up custom folder directory inside manifest.js)
                </li>
                <li class="collection-item">
                    <i class="tiny material-icons green darken-1" style="color: #fff;">done</i>
                    Search debounced to 250ms
                </li>
            </ul>

            <ul class="collection with-header">
                <li class="collection-header"><h5>Upcoming in 2.x</h5></li>

                <li class="collection-item">
                    Improved rendered layout (code snippets, readability)
                </li>

                <li class="collection-item">
                    Full screen layout
                </li>

            </ul>

            <!--<ul class="collection with-header" v-for="(articles, category) in $store.state.articles">-->
                <!--<li class="collection-header"><h4>{{ category }}</h4></li>-->
                <!--<router-link v-for="article in articles"-->
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
            searchResults: require('./search/search-results.vue')
        },

        mounted() {
            // Clear up search everytime we load a new article.
            this.$store.dispatch('resetSearch')
        }
    }
</script>