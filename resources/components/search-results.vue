<template>
    <div class="ui text container" style="margin-top: 5rem; margin-bottom: 5rem;" v-if="$store.state.searched.length">

        <h1>{{ $store.state.searched.length }} results found</h1>
        <hr>
        <div class="ui vertical segment " v-for="article in $store.state.searched">
            <router-link :to="article.slug"
            >
                <h3>{{ article.title }}</h3>
            </router-link>
            <p>Tagged: {{ article.tags }}</p>
        </div>
    </div>
    <div class="ui text container" style="margin-top: 5rem; margin-bottom: 5rem;" v-else>
        <h1>No result found</h1>
        <hr>
    </div>
</template>