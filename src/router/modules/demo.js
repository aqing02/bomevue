export default [
  {
    path: '/',
    name: 'swap',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/lp',
    name: 'lp',
    component: () => import('@/views/LpView.vue'),
  },
];
