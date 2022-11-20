import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'demo',
      component: () => import('@/layout/StandardLayout.vue'),
      children: [
        {
          path: 'demo',
          name: 'name',
          component: () => import('@/views/DemoView.vue'),
        },
      ],
    },
  ],
})

export default router
