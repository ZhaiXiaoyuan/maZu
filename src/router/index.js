import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name:'home',
            component: resolve => require(['../page/Home.vue'], resolve),
        },
        {
            path: '/association',
            name:'association',
            component: resolve => require(['../page/Association.vue'], resolve),
        },
        {
            path: '/college',
            name:'college',
            component: resolve => require(['../page/College.vue'], resolve),
        },
        {
            path: '/encyclopedia',
            name:'encyclopedia',
            component: resolve => require(['../page/Encyclopedia.vue'], resolve),
        },
    ]
})
