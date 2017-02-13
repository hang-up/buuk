<template>
    <div class="ui visible left vertical sidebar menu">
        <a class="item">
            <div class="ui transparent fluid input">
                <input type="text" placeholder="Search...">
            </div>
        </a>

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
        name: 'sidebar'
    }
</script>