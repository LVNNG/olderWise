import { createRouter, createWebHistory } from 'vue-router';

import Hero from './components/Hero.vue';
import ApplicationForm from './components/ApplicationForm.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/hero'},
        { path: '/hero', component: Hero},
        { path: '/application', component: ApplicationForm }
    ]
})

export default router;