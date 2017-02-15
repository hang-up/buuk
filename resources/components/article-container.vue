<template>
    <!-- Container for search results -->
    <div class="ui text container" v-if="$store.state.searched.length">
        <div class="ui items">
            <div class="item" v-for="article in $store.state.searched">
                <div class="content">
                    <router-link :to="article.slug"
                    >
                        {{ article.title }}
                    </router-link>
                </div>
                <div class="extra">
                    {{ article.tags }}
                </div>
            </div>
        </div>
    </div>

    <!-- Container for documentation -->
    <div class="ui text container"
         v-html="file"
         v-else
         style="margin-top: 5rem; margin-bottom: 5rem;"
    >
    </div>
</template>

<script type="text/babel">
    const md = require('markdown-it')({
        breaks: true,
        typographer: true
    }).use(require('markdown-it-center-text'))

    export default {
        name: 'article-container',

        data() {
            return {
                file: ""
            }
        },

        // We need to watch route and re-render since every page loads a different .md file.
        watch: {
            '$route' : 'requiring'
        },

        mounted() {
            this.requiring()
        },

        methods: {
            requiring() {
                this.file = md.render(require(`../assets/${this.$route.params.article}.md`))
            }
        }
    }
</script>