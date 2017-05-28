<template>
    <div>
        <article-navigator action="previous" :link="getPreviousArticle" v-if="getPreviousArticle">
            <i class="material-icons" slot="content">keyboard_arrow_left</i>
        </article-navigator>
        <article-navigator action="next" :link="getNextArticle" v-if="getNextArticle">
            <i class="material-icons" slot="content">keyboard_arrow_right</i>
        </article-navigator>
    </div>
</template>

<script>
    const _ = require('lodash')

    export default {
        components: {
            articleNavigator: require('./article-navigator.vue')
        },

        watch: {
            '$route' : 'getArticlePosition'
        },

        computed: {
            /**
             * Returns the previous article slug.
             *
             * @returns {null|number}
             * */
            getPreviousArticle() {
                if (this.getArticlePosition() === 0) {
                    return null
                }
                else
                    return this.$store.state.searchArticles[this.getArticlePosition() - 1].slug
            },

            /**
             * Returns the next article slug.
             *
             * @returns {null|number}
             * */
            getNextArticle() {
                if (this.getArticlePosition() === this.$store.state.searchArticles.length - 1) {
                    return null
                }
                else
                    return this.$store.state.searchArticles[this.getArticlePosition() + 1].slug
            }
        },

        methods: {
            /**
             * Returns the index of the current article viewed from our flatten articles array.
             *
             * NOTES: This won't work as intended if there are duplicate articles with the same slug since
             * we trim duplicate articles based on slug uniqueness.
             *
             * @returns {number}
             */
            getArticlePosition() {
                // Get the article slug.
                let current = this.$route.fullPath.substr(1)

                // Return where we are in a flat array of articles.
                return _.findIndex(this.$store.state.searchArticles, (article) => {
                    return article.slug === current
                })
            }
        }
    }
</script>