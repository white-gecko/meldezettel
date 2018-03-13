import Vue from 'vue'
import Router from 'vue-router'

import THWDashboard from '@/components/THWDashboard'
import THWForm from '@/components/THWForm'
import Layout from '@/components/Layout'
import THWRoleSelect from '@/components/THWRoleSelect'
import THWLandingPage from '@/components/THWLandingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: THWLandingPage
    },
    {
      path: '/home',
      component: Layout,
      redirect: 'home',
      children: [
        /*
        {
          path: 'start',
          name: 'Start',
          component: THWLandingPage
        },
        */
        {
          path: 'home',
          name: 'Home',
          component: THWDashboard
        },
        {
          path: 'create/:id?',
          name: 'Create',
          component: THWForm
        },
        {
          path: 'role',
          name: 'Role',
          component: THWRoleSelect
        }
      ]
    }
  ]
})
