import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/user',
      component: () => import('../layout/index.vue'),
      meta: { title: '首页' },
      children: [
        {
          path: 'user',
          meta: { icon: 'User', title: '用户管理', index: '1', requiresAuth: true },
          component: () => import('../views/system/user.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    }
  ]
})

export default router
