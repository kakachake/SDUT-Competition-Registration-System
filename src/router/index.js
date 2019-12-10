import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: resolve => require(['../components/page/index/index.vue'], resolve),
            meta:{
                title:"竞赛报名系统"
            }
        },
        {
            path: '/backboard',
            component: resolve => require(['../components/page/backboard/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            redirect:'/backboard/dashboard',
            children:[
                {
                    path: 'dashboard',
                    component: resolve => require(['../components/page/backboard/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '403',
                    component: resolve => require(['../components/page/backboard/403.vue'], resolve),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/backboard/login',
            component: resolve => require(['../components/page/backboard/Login.vue'], resolve)
        }
    ]
})
