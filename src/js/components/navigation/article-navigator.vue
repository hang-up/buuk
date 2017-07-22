<style>
    .btn-navigator {
        position: fixed !important;
        top: 50%;
        transform: translateY(-50%);
    }

    .btn-navigator-left {
        margin-left: 12px;
    }

    .btn-navigator-right {
        right: 12px;
    }
</style>

<template>
    <router-link class="btn-floating waves-effect waves-light grey lighten-2 btn-navigator"
                 v-bind:class="position"
                 :to="link"
    >
        <slot name="content"></slot>
    </router-link>
</template>

<script>
    export default {
        props: ['link', 'action'],

        computed: {
            /**
             * Returns the position of the navigator (left / right)
             *
             * @returns {{btn-navigator-left: boolean, btn-navigator-right: boolean}}
             */
            position() {
                return {
                    "btn-navigator-left": this.action === 'previous',
                    "btn-navigator-right": this.action === 'next'
                }
            }
        }
    }
</script>