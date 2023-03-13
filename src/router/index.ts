import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PageNotFound from "@/components/PageNotFound.vue";
import InternalServerError from "@/components/InternalServerError.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/50x',
            name: 'internal-server-error',
            component: InternalServerError
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: PageNotFound
        }
    ]
});

export default router;
