/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-12-08 10:57:14
 * @LastEditors: kakachake
 * @LastEditTime: 2019-12-14 00:10:14
 */
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
            path: '/rank/:id',
            component: resolve => require(['../components/page/index/ranklist.vue'], resolve),
            meta:{
                title:"比赛排名"
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
                    path: 'newRace',
                    component: resolve => require(['../components/page/backboard/newRace.vue'], resolve),
                    meta: { title: '新增比赛' }
                },
                {
                    path: 'RaceList',
                    component: resolve => require(['../components/page/backboard/RaceList.vue'], resolve),
                    meta: { title: '比赛列表' }
                },
                {
                    path: 'registerList',
                    component: resolve => require(['../components/page/backboard/registerList.vue'], resolve),
                    meta: { title: '报名' }
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
        },{
            path:'*',
            component: resolve => require(['../components/page/404.vue'], resolve)
        }
    ]
})
