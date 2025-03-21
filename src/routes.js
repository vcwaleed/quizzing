import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './views/HomePage.vue';
import CreatquizComponent from './views/CreatquizComponent.vue';
const routes=[
    {
        name: "HomePage",
        path: '/',
        component:HomePage
    }
    ,
    {
        name:"CreatquizComponent",
        path:'/createquiz',
        component:CreatquizComponent 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;