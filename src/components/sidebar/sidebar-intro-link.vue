<style lang="scss">
    .sidebar-intro-link {
        font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
        font-size: 14px;
        color: #2c3e50 !important;
        padding: .75rem .75rem .75rem 0;
        margin: 0;
        font-weight: 500;
        cursor: pointer;
        transition: color .1s linear;
    }
    .sidebar .list__tile {
        padding-right: 0;
    }
</style>

<template>
    <v-list-tile>
        <v-list-tile-content style="border-bottom: 1px dashed rgba(0,0,0,.1);">
            <router-link :to="{ name: 'home' }" class="sidebar-intro-link">Introduction</router-link>
        </v-list-tile-content>
    </v-list-tile>
</template>