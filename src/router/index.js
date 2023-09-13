import {createRouter , createWebHistory} from 'vue-router';

import HomePage from '../pages/HomPage.vue';
import DetailPage from '../pages/DetailPage.vue';
import FormPage from '../pages/FormPage.vue';

const router = createRouter({
    history:createWebHistory(),
    linkExactActiveClass: 'active',
    routes:[
        { path: '/' , name: 'home' , component: HomePage},
        { path: '/projects/:id' , name: 'DetailPage' , component: DetailPage},
        { path: '/form' , name: 'FormPage' , component: FormPage},
    ]
});


export { router}