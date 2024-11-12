import { createRouter, createWebHashHistory } from 'vue-router'
import { usePageTitle } from './helper'

// const whiteList = ['/login'] // 白名单
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/home.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/system/404/404.vue'),
      meta: {
        title: '找不到页面'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  usePageTitle(to)
  next()
})

async function setupRouter(app) {
  app.use(router)
}

export { router, setupRouter }
