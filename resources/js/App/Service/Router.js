import Vue from 'vue'
import VueRouter from 'vue-router'
import api from '../Service/Api'

Vue.use(VueRouter)

const Router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: ()=>import('../Layout/index'),
            children: [
                {
                    path: '/',
                    component: ()=>import('../pages/Home/view')
                },
                {
                    path: '/contact',
                    component: ()=>import('../pages/Contact/index')
                },
                {
                    path: '/about',
                    component: ()=>import('../pages/About/index')
                },
                {
                    path: '/video/:id',
                    component: ()=>import('../pages/Video/Display')
                }
            ]
        },
        {
            path: '/admin',
            component: ()=>import('../Layout/admin'),
            children: [
                {
                    path: '',
                    component: ()=> import('../pages/Admin/VideoPanel')
                },
            ],
            beforeRouteEnter: ((to, from, next)=>{
                api.checkUser()
                    .then((response)=>{
                        if(response.data.valid){
                            next()
                        }
                        else{
                            next('/')
                        }

                    })
            })
        },
        {
            path: '/login',
            component: ()=>import('../Layout/login')
        }
    ]
})

export default Router
