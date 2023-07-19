import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../pages/Login.vue'


const route = [
    {
        name : "Login",
        path : "/",
        component : Login   
        //component: () => import(/* webpackChunkName: "public" */ '@/pages/Login.vue')
    },
    {
        name:"Accueil",
        path : "/Accueil",
        component: () => import(/* webpackChunkName: "Accueil" */ '@/pages/Accueil.vue')
    },
    {
        name:"Signup",
        path : "/Signup",
        component: () => import(/* webpackChunkName: "Signup" */ '@/pages/Signup.vue')
    }
    
]

const router = createRouter({
    history:createWebHashHistory(),
    route
})
export default router

