import Vue from 'vue'
import Vuex from 'vuex'
import api from './Api'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        responseColor: '',
        responseIcon: '',
        responseText: '',
        response: '',

        // Edit dialog
        edit: false,
        videoTitle: '',
        videoDescription: '',
        videoLink: '',

    },
    mutations:{

    },
    actions:{

    }
})
