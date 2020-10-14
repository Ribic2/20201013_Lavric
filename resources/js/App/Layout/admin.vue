<template>
    <v-app>
        <v-app-bar
            color="cyan"
            dark
            app
        >
            <v-toolbar-title>Dashboard</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
                color="cyan"
                :elevation="0"
                :ripple="false"
                @click="logout()"
            >
                <v-icon left

                >mdi-logout</v-icon>
                Logout
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
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>

</style>
