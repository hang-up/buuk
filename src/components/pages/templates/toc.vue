<style lang="scss" scoped>
    .toc {
        display: table;
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 1px;

        ul {
            list-style-type: none;
            li {
                margin-bottom: 6px;
                a {
                    color: #7f8c8d !important;
                    text-decoration: none;
                    &:hover, &:focus, &:active {
                        text-decoration: underline;
                    }
                }
                &.heading {
                    &-2 {
                        margin-left: 17px;
                    }
                    &-3 {
                        margin-left: 32px;
                    }
                    &-4 {
                        margin-left: 47px;
                    }
                }
            }
        }
    }
</style>


<template>
    <div class="toc">
        <ul>
            <li v-for="heading in headings" :key=heading.text :class="`heading-${heading.level}`">
                <a href="/">{{ heading.text }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        headings: {
            type: Array
        }
    }
}
</script>

