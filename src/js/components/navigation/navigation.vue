<template>
    <div v-if="!isMobile">
        <article-navigator action="previous" :link="getPreviousArticle" v-if="getPreviousArticle">
            <i class="mi mi-chevron-left" slot="content"></i>
        </article-navigator>
        <article-navigator action="next" :link="getNextArticle" v-if="getNextArticle">
            <i class="mi mi-chevron-right" slot="content"></i>
        </article-navigator>
    </div>
</template>

<script>
    const _ = window._

    export default {
        components: {
            articleNavigator: require('./article-navigator.vue')
        },


        watch: {
            // We need to watch $route so we can render the right arrows every time we switch articles.
            '$route' : 'getArticlePosition'
        },

        computed: {
            /**
             * Returns the previous article slug.
             *
             * @returns {boolean|number}
             * */
            getPreviousArticle() {
                if (this.getArticlePosition() <= 0) {
                    return false
                }
                else
                    return this.$store.state.searchArticles[this.getArticlePosition() - 1].slug
            },

            /**
             * Returns the next article slug.
             *
             * @returns {boolean|number}
             * */
            getNextArticle() {
                if (this.getArticlePosition() === this.$store.state.searchArticles.length - 1) {
                    return false
                }
                else
                    return this.$store.state.searchArticles[this.getArticlePosition() + 1].slug
            },

            /**
             * Determine if we are on mobile.
             *
             * @returns {boolean}
             * */
            isMobile() {
                return window.innerWidth < 993
            }
        },

        methods: {
            /**
             * Returns the index of the current article viewed from our flatten articles array.
             *
             * NOTES: This won't work as intended if there are duplicate articles with the same slug since
             * we trim duplicate articles based on slug uniqueness.
             *
             * @returns {number|boolean}
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