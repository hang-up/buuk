<template>
    <div class="col s12" style="margin-top: 5rem; margin-bottom: 5rem;"
         v-if="$store.state.searched.length && $store.state.query">

        <h1>{{ $store.state.searched.length }} results found</h1>

        <div class="card" v-for="article in $store.state.searched">
            <div class="card-content">
                <router-link :to="article.slug"
                             v-on:click.native="clearSearch"
                             class="card-title"
                >
                    <span>{{ article.title }}</span>
                </router-link>
                <p>Tagged: {{ article.tags }}</p>
            </div>
        </div>
    </div>
    <div class="col s12" style="margin-top: 5rem; margin-bottom: 5rem;" v-else>
        <h1>No result found</h1>
    </div>
</template>

<script type="text/babel">
    export default {
        methods: {
            clearSearch() {
                this.$store.dispatch('resetSearch')
            }
        }
    }
</script>