<style lang="scss" scoped>
$toc-padding: 17px;

.toc {
    display: table;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 1px;
    padding: $toc-padding $toc-padding $toc-padding 0;
    margin: $toc-padding;

    ul {
        list-style-type: none;
        li {
            margin-bottom: 6px;
            a {
                color: #7f8c8d !important;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
            &.heading {
                &-2 {
                    margin-left: $toc-padding;
                }
                &-3 {
                    margin-left: $toc-padding * 2;
                }
                &-4 {
                    margin-left: $toc-padding * 3;
                }
                &-5 {
                    margin-left: $toc-padding * 4;
                }
                &-6 {
                    margin-left: $toc-padding * 5;
                }
            }
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>


<template>
    <div class="toc">
        <ul>
            <li v-for="heading in headings" :key=heading.text :class="`heading-${heading.level}`">
                <router-link :to="heading.slug">{{ heading.text }}</router-link>
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

