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
    }
    
]

const router = createRouter({
    tgt
    history:createWebHashHistory(),
    route
})
export default router

