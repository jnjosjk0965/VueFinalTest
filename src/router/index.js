import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tokyo',
    name: 'tokyo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackPrefetch: true */ '../views/TokyoView.vue') // 해당 주석을 넣어 주면 해당 컴포넌트에 대해 prefetch 적용
    // 이 방법을 사용하면 사용자가 path에 접속하기 전까진 해당 vue 파일을 import하지 않음
  },
  {
    path: '/osaka',
    name: 'osaka',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackPrefetch: true */ '../views/OsakaView.vue')
  },
  {
    path: '/fukuoka',
    name: 'fukuoka',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackPrefetch: true */ '../views/FukuokaView.vue')
  },
  {
    path: '/hokkaido',
    name: 'hokkaido',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackPrefetch: true */ '../views/HokkaidoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
