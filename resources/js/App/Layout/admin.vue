<template>
    <v-app>
        <v-app-bar
            color="cyan"
            dark
            app
        >
            <v-toolbar-title>Dashboard</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-logout</v-icon>
            </v-btn>

            <template v-slot:extension>
                <v-tabs
                    align-with-title
                >
                    <v-tabs-slider color="yellow"></v-tabs-slider>

                    <v-tab v-for="item in items"
                           :to="item.to"
                           :key="item">
                        {{ item.text }}
                    </v-tab>
                </v-tabs>
            </template>
        </v-app-bar>

        <v-main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "admin.vue",

    data() {
        return {
            items: [
                {
                    text: 'Edit', to: '/admin'
                },
                {
                    text: 'Sequence', to: '/admin/sequence'
                }
            ],
        }
    }
}
</script>

<style scoped>

</style>
