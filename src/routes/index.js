import { createRouter,createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import SearchResults from '../views/SearchResult.vue'
import Detail from '../views/Detail.vue'

const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path:'/search',
        name: 'SearchResults',
        component: SearchResults
    },
    {
        path:'/details',
        name: 'Detail',
        component: Detail
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router