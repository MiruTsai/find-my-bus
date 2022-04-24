import { createRouter, createWebHistory } from 'vue-router'
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
        path: '/estimated/:routeName',
        name: 'estimated',
        component: () => import('../views/estimated/estimated.vue'),
        props: true
    },
    {
        path: '/busstop/:mode',
        name: 'bus stop',
        component: () => import('../views/busStop/busStop.vue'),
        props: true
    },
    {
        path: '/busstop/:mode/:stationId',
        name: 'bus stop routes',
        component: () => import('../views/busStop/busStop.vue'),
        props: true
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router