import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/index.vue'),
        meta: {
            title: '首頁'
        }
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('../views/search/search.vue'),
        meta: {
            title: '搜尋公車站'
        }
    },
    {
        path: '/line',
        name: 'line',
        component: () => import('../views/line.vue')
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router