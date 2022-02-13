import { createRouter,createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import SearchResults from '../views/SearchResult.vue'
import Detail from '../views/Detail.vue'
import CustomError from '../views/CustomError.vue'

const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path:'/search/:type?',
        name: 'SearchResults',
        component: SearchResults
    },
    {
        path:'/details/:id',
        name: 'Detail',
        component: Detail
    },
    {
        path:'/:pathMatch(.*)',
        name: 'CustomError',
        component: CustomError
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router