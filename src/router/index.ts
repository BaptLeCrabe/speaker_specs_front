import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('@/components/TheWelcome.vue')
    },
    {
      path: '/plans',
      name: 'plans',
      component: () => import('@/components/Plans.vue')
    },
    {
      path: '/plans/:id',
      name: 'plan show',
      component: () => import('@/components/speakers/SpeakerShow.vue')
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: () => import('@/components/Drivers.vue')
    },
    {
      path: '/drivers/:id',
      name: 'driver show',
      component: () => import('@/components/drivers/DriverShow.vue')
    },
    {
      path: '/conceptors',
      name: 'conceptors',
      component: () => import('@/components/Conceptors.vue')
    },
    {
      path: '/conceptors/:id',
      name: 'conceptor show',
      component: () => import('@/components/conceptors/ConceptorShow.vue')
    },
  ]
})

export default router
