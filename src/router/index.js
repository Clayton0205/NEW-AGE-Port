import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: () => import('../components/navbar.vue')
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('../App.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/Resume.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/projects.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import('../views/testimonials.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
