require('./bootstrap');

window.Vue = require('vue');

import App from './App.vue'

import Vuetify from './App/Service/Vuetify'
import Router from './App/Service/Router'

const app = new Vue({
    el: '#app',
    vuetify: Vuetify,
    router: Router,
    render: h => h(App)
});
