export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/time',
    name: 'time',
    component: () => import('@/views/timeout.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin.vue'),
  },
];
