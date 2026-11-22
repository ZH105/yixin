import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    { path: '/index', name: 'index', component: () => import('../views/Index.vue') },
    { path: '/aboutYixon', name: 'aboutYixon', component: () => import('../views/AboutYixon.vue') },
    { path: '/capacity', name: 'capacity', component: () => import('../views/Capacity.vue') },
    { path: '/qualityAssurance', name: 'qualityAssurance', component: () => import('../views/QualityAssurance.vue') },
    { path: '/typicalProducts', name: 'typicalProducts', component: () => import('../views/TypicalProducts.vue') }
]
const router = createRouter({
    history: createWebHistory('/'),
    routes
})
export default router