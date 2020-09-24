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

        }
    }
}
</script>

<style scoped>

</style>
