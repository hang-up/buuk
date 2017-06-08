<style>
    .collapsible-body {
        padding: 0 0 0 1rem !important;
    }

    .is-link{
        text-decoration: underline;

        -webkit-text-decoration-style: dashed;
        text-decoration-style: dashed;

        -ms-text-underline-position: under;
        text-underline-position: under;
    }

    .side-nav .collapsible-header, .side-nav.fixed .collapsible-header {
        padding: 0 32px !important;
    }
</style>

<template>
    <!-- Check if the current articles has any sub cat. -->
    <li v-if="!isDeep(articles)">
        <a class="collapsible-header waves-effect waves-red">{{ category }}</a>
        <div class="collapsible-body">
            <ul class="collapsible" data-collapsible="accordion">
                <li>
                    <div>
                        <ul class="collapsible" data-collapsible="accordion">
                            <sidebar-item v-for="(a, c) in articles" :articles="a" :category="c" :key="a.slug"></sidebar-item>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </li>
    <!-- If no sub category. -->
    <li v-else>
        <a class="collapsible-header waves-effect waves-red">{{ category }}</a>
        <div class="collapsible-body">
            <ul>
                <li v-for="article in articles" :key="article.slug">
                    <router-link :to="article.slug"
                                 class="waves-effect waves-light is-link"
                                 style="font-weight: 400;">
                        {{ article.title }}
                    </router-link>
                </li>
            </ul>
        </div>
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