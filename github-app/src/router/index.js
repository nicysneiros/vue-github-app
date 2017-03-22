import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Results from '@/components/Results'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search
    },
    {
      path: '/results/:token',
      name: 'results',
      component: Results
    }
  ]
})
