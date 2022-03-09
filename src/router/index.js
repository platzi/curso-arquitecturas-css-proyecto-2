import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import Project from '../views/Project.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Luis Reyes Developer"
    }
  },
  {
    path: '/works',
    name: 'Works',
    component: Works,
    meta: {
      title: "My portfolio"
    }
  },
  {
    path: '/works/:id',
    name: 'project-detail',
    component: Project,
    meta: {
      title: "Project Detail"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router