import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('../pages/dashboard.vue'),
        },
        {
          path: 'word-writer',
          component: () => import('../pages/tools/word-writer.vue'),
        },
        {
          path: 'artist',
          component: () => import('../pages/tools/artist.vue'),
        },
        {

          path: 'hamkalam',
          component: () => import('../pages/tools/hamkalam.vue'),
        },



        {

          path: 'account-settings',
          component: () => import('../pages/account-settings.vue'),
        },
        // =============
        {
          path: 'icons',
          component: () => import('../pages/icons.vue'),
        },
        {
          path: 'cards',
          component: () => import('../pages/cards.vue'),
        },
        // =================
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../pages/[...all].vue'),
        },
      ],
    },
  ],
})

export default router
