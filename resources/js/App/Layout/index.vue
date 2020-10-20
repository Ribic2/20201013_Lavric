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
        <v-container
            :fluid="$vuetify.breakpoint.mobile ? true : false"
            :class="$vuetify.breakpoint.mobile ? '' : 'mt-10'"
        >
            <v-app-bar
                color="white"
                :elevation="0"
            >
                <v-toolbar-title
                    @click="redirect()"
                    class="pa-0"
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
                        active-class="test"
                        v-for="button in buttons"
                        :key="button.id"
                        :to="button.link"
                    >
                        {{ button.text }}
                    </v-btn>
                </v-btn-toggle>

            </v-app-bar>
            <hr class="grey">

            <v-main id="main">
                <router-view></router-view>
            </v-main>
        </v-container>


        <cookie-law theme="dark-lime"></cookie-law>
    </v-app>
</template>

<script>
import CookieLaw from 'vue-cookie-law'

export default {
    name: "index.vue",
    components: {
        CookieLaw
    },
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
    methods: {
        redirect() {
            window.location.href = "/"
        }
    }
}
</script>

<style>
* {
    font-family: 'Open Sans', sans-serif;
}

#title:hover
{
    cursor: pointer;
}
.container {
    width: 55vw;
}

.v-toolbar__content{
    padding: 0px;
}

.Cookie__button {
    background: white !important;
    color: black !important;
}

.test {
    font-weight: 600;
    background-color: transparent !important;
}

@media only screen and (max-width: 565px) {
    .container {
        width: auto;
    }

    #main {
        width: 100vw;
    }
}
</style>
