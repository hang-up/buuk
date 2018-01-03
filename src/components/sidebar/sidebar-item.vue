<style lang="scss">
    .sidebar-items-item {
        margin-left: 20px;
    }
</style>

<template>
    <li class="sidebar-items-item">
        <h2 class="title">
            {{ category }}
        </h2>

        <ul>
            <template v-if="Array.isArray(articles)">
                <template v-for="article in articles">
                    <li v-if="article.title">
                        <p>{{ article.title }}</p>
                    </li>

                    <sidebar-item v-for="(subArticles, subCategory) in article"
                                  :category="subCategory"
                                  :articles="subArticles"
                                  v-else></sidebar-item>
                </template>
            </template>
            <template v-else>

                <sidebar-item v-for="(subArticles, subCategory) in articles"
                              :category="subCategory"
                              :articles="subArticles"></sidebar-item>
            </template>
        </ul>

    </li>
</template>

<script>
    export default {
        props: ['category', 'articles'],
        name: 'sidebar-item'
    }
</script>