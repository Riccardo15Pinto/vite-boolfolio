import {createRouter , createWebHistory} from 'vue-router';

import HomePage from '../pages/HomPage.vue';
import DetailPage from '../pages/DetailPage.vue';

const router = createRouter({
    history:createWebHistory(),
    linkExactActiveClass: 'active',
    routes:[
        { path: '/' , name: 'home' , component: HomePage},
        { path: '/projects/:id' , name: 'DetailPage' , component: DetailPage},
    ]
});


export { router}