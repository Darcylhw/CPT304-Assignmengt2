import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/hotel',
    name: 'hotel',
    component: () => import('../views/hotel.vue')
  },

  {
    path: '/holiday',
    name: 'holiday',
    component: () => import('../views/holiday.vue')
  },

  {
    path: '/weather',
    name: 'weather',
    component: () => import('../views/weather.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
