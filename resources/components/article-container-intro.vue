<template>
    <div>
        <!-- Search results -->
        <search-results></search-results>

        <!-- Container for documentation -->
        <div class="ui text container" style="margin-top: 5rem; margin-bottom: 5rem;">
            <h1>
                {{ $store.state.app }}
            </h1>
            <h3>
                {{ $store.state.description }}
            </h3>
            <p> These pages provide how-to tips to get you started on JMBR IS infrastructure.
            </p>

            <div class="ui basic segment">
                <ul class="ui bulleted list">
                    <li v-for="(articles, category) in $store.state.articles">
                        <h4 style="margin-bottom: 0">{{ category }}</h4>

                        <div class="bulleted link list">
                            <div class="item" v-for="article in articles">
                                <router-link :to="article.slug"
                                             style="margin-left: 0.5rem"
                                >
                                    {{ article.title }}
                                </router-link>
                            </div>
                        </div>

                        <div class="ui divider hidden"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        components: {
            searchResults: require('./search-results.vue')
        },

        mounted() {
            this.$store.commit({
                type: 'resetSearchResults'
            })
        }
    }
</script>