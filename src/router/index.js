import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyResume from '../views/MyResume.vue'
import MyProjects from '../views/MyProjects.vue'
import ECE157A from '../views/ECE157A.vue'
// import App from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component: MyProjects
  },
  {
    path: '/resume',
    name: 'resume',
    component: MyResume
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
    path: '/ECE157A',
    name: 'ece157a',
    component: ECE157A
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
