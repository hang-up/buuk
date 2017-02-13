<template>
    <div class="ui visible left vertical sidebar menu">

        <search></search>

        <router-link to="/" class="item">
            Introduction
        </router-link>

        <div class="item" v-for="(articles, category) in $store.state.articles">
            <h5>{{ category }}</h5>

            <div class="menu">
                <router-link :to="article.slug"
                             class="item"
                             v-for="article in articles"
                             style="margin-left: 0.5rem"
                >
                    {{ article.title }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'sidebar',

        components: {
            search: require('./search.vue')
        }
    }
</script>