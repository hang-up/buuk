<template>
    <a class="item">
        <div class="ui transparent fluid input">
            <input type="text"
                   placeholder="Search..."
                   v-model="q"
            >
        </div>
    </a>
</template>

<script>
    const _ = require('lodash')

    export default {
        data() {
            return {
                q: "",
                isDebouncing: false
            }
        },

        watch: {
            q() {
                this.searchResults()
            }
        },

        methods: {
            searchResults: _.debounce(function () {
                setTimeout(() => {
                    this.$store.commit({
                        type: 'search',
                        query: this.q
                    })

                    this.isDebouncing = !this.isDebouncing

                }, 500)
            }, 500)
        }
    }
</script>