<template>
    <v-app>
        <!-- Navigation drawer - Mobile -->
        <v-navigation-drawer
            v-model="drawer"
            app
            temporary
        >
            <v-list>
                <v-list-item
                    :ripple="false"
                    link
                    :to="button.link"
                    v-for="button in buttons" :key="button.id"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ button.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- App -->
        <v-container :fluid="$vuetify.breakpoint.mobile ? true : false">
            <v-app-bar
                color="white"
                :elevation="0"
            >
                <v-toolbar-title
                @click="redirect()"
                >
                    <span id="title" class="font-weight-bold">NIK LAVRIČ</span> editor colorist
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-app-bar-nav-icon
                    v-if="$vuetify.breakpoint.mobile"
                    @click="drawer = !drawer"
                ></v-app-bar-nav-icon>

                <v-btn-toggle
                    group
                    background-color="white"
                    v-else>
                    <v-btn
                        v-for="button in buttons"
                        :key="button.id"
                        :to="button.link"
                    >
                        {{ button.text }}
                    </v-btn>
                </v-btn-toggle>

            </v-app-bar>
            <hr>

            <v-main id="main">
                <router-view></router-view>
            </v-main>
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: "index.vue",
    data() {
        return {
            drawer: false,
            buttons: [
                {index: 0, text: 'HOME', link: '/'},
                {index: 1, text: 'ABOUT', link: '/about'},
                {index: 2, text: 'CONTACT', link: '/contact'}
            ]
        }
    },
    methods:{
        redirect(){
            window.location.href = "/"
        }
    }
}
</script>

<style scoped>
* {
    font-family: 'Open Sans', sans-serif;
}

.container {
    width: 60vw;
}

@media only screen and (max-width: 565px) {
    .container {
        width: auto;
    }
    #main{
        width: 100vw;
    }
}
</style>
