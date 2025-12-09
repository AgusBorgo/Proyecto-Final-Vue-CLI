import {
    createRouter,
    createWebHashHistory
}from 'vue-router';

import Respuestas from './components/Respuestas.vue'
import Convertor from './components/Convertor.vue'
import Convertor2 from './components/Convertor2.vue'
import Convertor3 from './components/Convertor3.vue'
import Inicio from './components/Inicio.vue';

const routes = [
    { path: '/', redirect: '/inicio' },
    { path: '/respuestas', component: Respuestas },
    { path : '/convertor', component: Convertor},
    { path : '/convertor2', component: Convertor2},
    { path : '/convertor3', component: Convertor3},
    {path : '/inicio', component: Inicio},

    { path: '/:pathmatch(.*)*', redirect: '/respuestas' },
   ]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;