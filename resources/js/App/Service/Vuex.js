import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        responseColor: '',
        responseIcon: '',
        responseText: '',
        response: '',
    },
    mutations:{

    },
    actions:{

    },
    getters:{
        videoTitle: state=>{
            return state.videoLink
        }
    }
})
