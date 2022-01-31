import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
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
        path: 'personal-stack',
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router