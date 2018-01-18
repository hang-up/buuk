<style>
    .container {
        transition: opacity 0.25s ease-in-out;
        -moz-transition: opacity 0.25s ease-in-out;
        -webkit-transition: opacity 0.25s ease-in-out;
    }

    .fade-in-enter{
        opacity: 1;
    }

    .fade-in-leave {
        opacity: 0;
    }
</style>


<template>
    <v-container fluid :class="activeClass">
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