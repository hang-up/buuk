<style>
    .btn-navigator {
        position: fixed !important;
        top: 50%;
        transform: translateY(-50%);
    }

    .btn-navigator-left {
        left: 312px;
    }

    .btn-navigator-right {
        right: 12px;
    }
</style>

<template>
    <a class="btn-floating
              waves-effect
              waves-light
              grey lighten-2
              tooltipped
              btn-navigator"
       v-bind:class="position"
       :data-position="toolTipPosition"
       :data-tooltip="link"
    >
        <slot name="content"></slot>
    </a>
</template>

<script>
    export default {
        props: ['link', 'action'],

        computed: {
            toolTipPosition() {
                switch (this.action) {
                    case 'previous':
                        return 'right'
                    break
                    case 'next':
                        return 'left'
                    break
                }
            },

            position() {
                return {
                    "btn-navigator-left": this.action === 'previous',
                    "btn-navigator-right": this.action === 'next'
                }
            }
        }
    }
</script>