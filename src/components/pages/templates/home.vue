<template>
    <v-container fluid :class="activeClass" class="pages-container">
        <v-layout column align-center>
            <h1 class="title">
                First, solve the problem. Then, write the code.
            </h1>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                activeClass: "fade-in-leave"
            }
        },

        mounted() {
            window.setTimeout(() => {
                this.activeClass = "fade-in-enter"
            }, 250)
        }
    }
</script>