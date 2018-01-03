<style lang="scss">
    .sidebar-items-item {
        list-style-type: none;
        margin-left: 15px;

        h2 {
            font-size: 14px;
            padding: .75rem .75rem .75rem 0;
            margin: 0;
            font-weight: 600;
            cursor: pointer;
            transition: color .1s linear;
            border-bottom: 1px dashed rgba(0,0,0,.1);

            &::after {
                content: "";
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

        p {
            line-height: 1.5;
        }
    }

    .sidebar-items-item-list {
        margin: 16px 0 0 20px;
        list-style-type: none;
    }
</style>

<template>
    <li class="sidebar-items-item">
        <h2 @click="showMenu = !showMenu" :class="{ 'is-active': showMenu }">
            {{ category }}
        </h2>

        <ul class="sidebar-items-item-list" v-show="showMenu">
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
        name: 'sidebar-item',

        data() {
            return {
                showMenu: true
            }
        }
    }
</script>