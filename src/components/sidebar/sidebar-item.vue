<style lang="scss">
.sidebar-items-item {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    list-style-type: none;
    margin-left: 15px;

    h2 {
        color: #2c3e50;
        font-size: 14px;
        padding: 0.75rem 0.75rem 0.75rem 0;
        margin: 0;
        font-weight: 500;
        cursor: pointer;
        transition: color 0.1s linear;
        border-bottom: 1px dashed rgba(0, 0, 0, 0.1);

        &::after {
            content: '';
            position: absolute;
            right: 12px;
            width: 0;
            height: 0;
            border-top: 4px solid transparent;
            border-right: 4px solid transparent;
            border-left: 4px solid #dee0df;
            border-bottom: 4px solid transparent;
        }
    }

    h2.is-active::after {
        transform: rotate(90deg);
    }
}

.sidebar-items-item-list {
    margin: 16px 0 0 20px;
    list-style-type: none;

    li {
        margin-bottom: 16px;

        a {
            color: #7f8c8d !important;
        }
    }
    li.is-active {
        font-weight: bold;
    }
}
</style>

<template>
    <li class="sidebar-items-item">
        <h2 @click="showMenu = !showMenu" :class="{ 'is-active': showMenu }">
            {{ category }}
        </h2>

        <ul class="sidebar-items-item-list" v-show="showMenu">
            <template v-if="Array.isArray(articles)">
                <template v-for="(article, _i) in articles">
                    <li v-if="article.title" v-bind:key="_i">
                        <router-link
                                :to="{ name: 'article', params: { article: article.slug }}"
                                :style="activeLinkStyle(article.slug)">
                            {{ article.title }}
                        </router-link>
                    </li>

                    <sidebar-item v-for="(subArticles, subCategory) in article"
                                  :category="subCategory"
                                  :articles="subArticles"
                                  :key="subCategory"
                                  v-else></sidebar-item>
                </template>
            </template>
            <template v-else>

                <sidebar-item v-for="(subArticles, subCategory) in articles"
                              :key="subCategory"
                              :category="subCategory"
                              :articles="subArticles"></sidebar-item>
            </template>
        </ul>

    </li>
</template>

<script>
export default {
    props: ['category', 'articles'],
    name: 'sidebar-item',

    data() {
        return {
            showMenu: true
        }
    },

    methods: {
        /**
         * Helper returning an object styling the current sidebar-item.
         *
         * @param slug
         * @returns {{}}
         */
        activeLinkStyle(slug) {
            let _styles = {}
            if (this.$route.params.article === slug) {
                _styles = {
                    fontWeight: 'bold',
                    color: `${this.$store.state.core.config.theme_color} !important`
                }
            }
            return _styles
        }
    }
}
</script>