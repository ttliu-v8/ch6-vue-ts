import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect:'/reciptList'    
  },
  {
    path: '/reciptList',
    name: 'ReciptList',
    component: () => import('../views/List.vue'),
    meta: {
      title: '回执代办任务',
      back: 'home'
    }
  },
  {
    path: '/recipt',
    name: 'Recipt',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Recipt.vue'),
    meta: {
      title: '回执详情',
      back: ''
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.afterEach( route => {
  //${//these hooks do not get a next function and cannot affect the navigation}
  document.title = route.meta.title
  
})
export default router
