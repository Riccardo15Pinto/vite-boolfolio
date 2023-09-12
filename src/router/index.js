import {createRouter , createWebHistory} from 'vue-router';

import HomePage from '../pages/HomPage.vue';

const router = createRouter({
    history:createWebHistory(),
    linkExactActiveClass: 'active',
    routes:[
        { path: '/' , name: 'home' , component: HomePage},
    ]
});


export { router}