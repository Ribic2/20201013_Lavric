<template>
    <v-app>
        <v-row
            justify="center"
            align="center"
        >
            <v-col
                xl="3"
                lg="4"
                md="6"
                sm="10"
                xs="12"
            >
                <v-card
                :elevation="$vuetify.breakpoint.mdAndDown ? 0 : 3"
                >
                    <v-responsive :aspect-ratio="1/1">
                        <v-card-title>Login</v-card-title>

                        <v-form
                            class="pa-8"
                        >
                            <v-text-field
                                v-model="username"
                                label="Username"
                            ></v-text-field>

                            <v-text-field
                                v-model="password"
                                label="Password"
                                :type="showPassword ? 'text' : 'password'"
                                :append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'"
                                @click:append="showPassword = !showPassword"
                                prepend-icon="mdi-lock"
                            ></v-text-field>

                            <v-btn
                                class="font-weight-bold"
                                color="primary"
                                :ripple="false"
                                dark
                                @click="login()"
                                block
                            >Login
                            </v-btn>

                            <v-alert
                                v-if="error"
                                class="mt-3 white--text"
                                color="error"
                            >
                                {{ error }}
                            </v-alert>
                        </v-form>
                    </v-responsive>
                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import api from '../Service/Api.js'
import Axios from "axios";

export default {
    name: "login.vue",
    data(){
        return{
            username: '',
            password: '',
            showPassword: false,
            loading: '',
            // Response
            error: '',
        }
    },
    methods:{
        login(){
           this.$store.dispatch('login',  {username: this.username, password: this.password})
        }
    }
}
</script>

<style scoped>

</style>
