//Importing Vue Router
import { createRouter, createWebHistory } from 'vue-router'
//Lazy Loading Routes
const HeroPage = () => import('../views/HeroPage.vue')
const ProjectsPage = () => import('../views/ProjectsPage.vue')
const AboutPage = () => import('../views/AboutPage.vue')
const ContactPage = () => import('../views/ContactPage.vue')

const routes = [
  {
    path: '/',
    component: HeroPage,
  },
  {
    path: '/projects',
    component: ProjectsPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/contact',
    component: ContactPage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router