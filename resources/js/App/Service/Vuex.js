import Vue from 'vue'
import Vuex from 'vuex'
import Api from "./Api";
import Router from "./Router";

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        responseColor: '',
        responseIcon: '',
        responseText: '',
        response: '',
        token: null
    },
    mutations:{
        SET_TOKEN(state, token){
            state.token = token
        }
    },
    actions:{
        async login({dispatch}, credentials){
            let response = await Api.login(credentials)

            localStorage.setItem('authToken', response.data.token)
            dispatch('attempt', response.data.token)
                .then(()=>{
                    Router.push('/admin')
                })
        },

        async attempt({commit}, token){
            commit('SET_TOKEN', token)
        }
    },
    getters:{
        videoTitle: state=>{
            return state.videoLink
        }
    }
})
