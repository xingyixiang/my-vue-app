import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    children: [
      { path: '/', component: () => import('@/components/HelloWorld.vue') },
    ],
  },
  { path: '/tank', component: () => import('@/views/tank.vue') },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
