import Vue from 'vue'
import Vuex from 'vuex'

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
        videoId: ''

    },
    mutations:{

    },
    actions:{

    }
})
