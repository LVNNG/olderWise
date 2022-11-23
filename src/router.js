import { createRouter, createWebHistory } from 'vue-router';

import ApplicationForm from './components/ApplicationForm.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/application', component: ApplicationForm }
    ]
})

export default router;