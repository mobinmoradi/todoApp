import { createRouter, createWebHistory } from 'vue-router'

import add from './views/add.vue';
import list from './views/list.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: add,
            alias: '/add'
        },
        {
            path: '/add',
            name: 'add',
            component: add
        },
        {
            path: '/list',
            name: 'list',
            component: list
        },
    ]
})

export default router
