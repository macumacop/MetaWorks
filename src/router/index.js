import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/Services',
    name: 'Services',
    component: () => import( '../views/Services.vue')
  },
  {
    path: '/ProjectWork',
    name: 'ProjectWork',
    component: () => import( '../views/ProjectWork.vue')
  },
  {
    path: '/Faqs',
    name: 'Faqs',
    component: () => import( '../views/Faqs.vue')
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: () => import( '../views/ContactUs.vue')
  },
  {
    path: '/Services/SteelErectors',
    name: 'SteelErectors',
    component: () => import( '../views/SteelErectors.vue')
  },
  {
    path: '/Services/Reinforcement',
    name: 'Reinforcement',
    component: () => import( '../views/Reinforcement.vue')
  },
  {
    path: '/Services/SteelWelding',
    name: 'SteelWelding',
    component: () => import( '../views/SteelWelding.vue')
  },
  {
    path: '/Services/Pressure',
    name: 'Pressure',
    component: () => import( '../views/Pressure.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
