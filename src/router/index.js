import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import Project from '../views/Project.vue'
import MyFavourites from '../components/My/Favourites.vue'
import MyStack from '../components/My/Stack.vue'
import MyNewSkills from '../components/My/NewSkills.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        component: MyFavourites
      },
      {
        path: 'my-stack',
        component: MyStack
      },
      {
        path: 'building',
        component: MyNewSkills
      },
    ]
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/work/:id',
    name: 'project-detail',
    component: Project
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router