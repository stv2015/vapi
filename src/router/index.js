/*
 * @Descripttion: 
 * @Author: stv
 * @Date: 2020-04-22 16:39:01
 */
import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'Login',
      component:()=>import('@/components/Login'),
    },
    {
      path:'/index',
      name:'Index',
      component:()=>import('@/components/Index'),
    },
  ]
});

router.beforeEach((to, form, next) => {
   if (to.path === '/login') {
     next();
   }else{
     let token = localStorage.getItem('token');//token保存在localstorage中
     if (token === null || token === '') {
       next('/login');
     } else {
       next();
     }
   }
});
export default router;
