<template>
    <li>
        <ul class="collapsible">
            <!-- Check if the current articles has any sub cat. -->
            <li v-if="!isDeep(articles)">
                <ul class="collapsible">
                    <li>
                        <a class="collapsible-header waves-effect waves-red">{{ category }}</a>
                        <div class="collapsible-body">
                            <ul>
                                <sidebar-item v-for="(a, c) in articles" :articles="a" :category="c"></sidebar-item>
                            </ul>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="bold" v-else>
                <a class="collapsible-header waves-effect waves-red">{{ category }}</a>
                <div class="collapsible-body">
                    <ul>
                        <li v-for="article in articles">
                            <router-link :to="article.slug"
                                class="waves-effect waves-light">
                                {{ article.title }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </li>
</template>

<script>
    export default{
        props: ['articles', 'category'],

        methods: {

            isDeep(array) {
                return _.isArray(array)
            }
        },

        name: "sidebar-item"
    }
</script>