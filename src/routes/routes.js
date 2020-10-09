import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: DashboardLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue')
      },      
      {
        path: '/pages',
        name: 'pages',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages.vue')
      }
    ]
  }
];

export default routes;
