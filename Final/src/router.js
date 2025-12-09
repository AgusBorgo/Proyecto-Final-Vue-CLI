import {
    createRouter,
    createWebHashHistory
}from 'vue-router';

import Respuestas from './components/Respuestas.vue'

const routes = [
    { path: '/', redirect: '/respuestas' },
    { path: '/respuestas', component: Respuestas },

    { path: '/:pathmatch(.*)*', redirect: '/respuestas' },
   ]

const router = createRouter({
    // your router options here
    // historial de rutas
    history: createWebHashHistory(),
    routes: routes
});

export default router;