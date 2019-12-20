import Vue from 'vue'
import Router from 'vue-router'
import Loading from './views/Loading.vue'
import Start from './views/Start.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    // {
    //   path: '/start',
    //   name: 'start',
    //   component: Start
    // },
    {
      path: '/beer-index',
      name: 'beer-index',
      component: () => import('./views/Beer-index.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./views/City.vue')
    },
    {
      path: '/more',
      name: 'more',
      component: () => import('./views/More.vue')
    }
  ]
})
