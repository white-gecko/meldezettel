import Vue from 'vue'
import Router from 'vue-router'

import THWDashboard from '@/components/THWDashboard'
import THWForm from '@/components/THWForm'
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: 'home',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: THWDashboard
        },
        {
          path: 'create',
          name: 'Create',
          component: THWForm
        }
      
      ]
    }
  ]
})
