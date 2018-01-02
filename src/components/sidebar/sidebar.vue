<template>
    <v-navigation-drawer
            fixed
            :mini-variant="miniVariant"
            :clipped="clipped"
            v-model="drawer"
            app
    >
        <v-list>
            <v-list-tile>
                <v-list-tile-content>
                    <v-text-field label="Search here..."
                                  v-model="search"
                                  solo
                                  single-line
                                  :append-icon="search ? 'cancel' : ''"
                                  :append-icon-cb="() => (search = '')"
                                 >
                    </v-text-field>
                </v-list-tile-content>
            </v-list-tile>

            <v-divider></v-divider>
            <v-list-tile
                    value="true"
                    v-for="(item, i) in items"
                    :key="i"
                    exact
            >
                <v-list-tile-action>
                    <v-icon light v-html="item.icon"></v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>




        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: ['fixed', 'miniVariant', 'clipped', 'drawer'],

        data() {
            return {
                items: [{
                    icon: 'bubble_chart',
                    title: 'Inspire'
                }],

                search: ""
            }
        }
    }
</script>