<style lang="scss">
    .sidebar-intro-link {
        font-size: 14px;
        padding: .75rem .75rem .75rem 0;
        margin: 0;
        font-weight: 600;
        cursor: pointer;
        transition: color .1s linear;
    }
</style>

<template>
    <v-list-tile>
        <v-list-tile-content>
            <router-link :to="{ name: 'home' }" class="sidebar-intro-link">Introduction</router-link>
        </v-list-tile-content>
    </v-list-tile>
</template>