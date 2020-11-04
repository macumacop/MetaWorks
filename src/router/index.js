import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
 routes: [
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
    path: '/services',
    name: 'Services',
    component: () => import( '../views/Services.vue')
  },
  {
    path: '/project-work',
    name: 'ProjectWork',
    component: () => import( '../views/ProjectWork.vue')
  },
  {
    path: '/faqs',
    name: 'Faqs',
    component: () => import( '../views/Faqs.vue')
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import( '../views/ContactUs.vue')
  },
  {
    path: '/services/steel-erectors',
    name: 'SteelErectors',
    component: () => import( '../views/SteelErectors.vue')
  },
  {
    path: '/services/reinforcement',
    name: 'Reinforcement',
    component: () => import( '../views/Reinforcement.vue')
  },
  {
    path: '/services/steel-welding',
    name: 'SteelWelding',
    component: () => import( '../views/SteelWelding.vue')
  },
  {
    path: '/services/pressure',
    name: 'Pressure',
    component: () => import( '../views/Pressure.vue')
  },
  {
    path: '/thanks',
    name: 'Pressure',
    component: () => import( '../views/thanks.vue')
  }
]


})