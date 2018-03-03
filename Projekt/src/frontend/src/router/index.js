import Vue from 'vue'
import Router from 'vue-router'

import THWDashboard from '@/components/THWDashboard'
import THWForm from '@/components/THWForm'
import Layout from '@/components/Layout'
import THWRoleSelect from '@/components/THWRoleSelect'

import store from '../store/state.js'

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
          component: THWForm,
          // https://router.vuejs.org/en/advanced/navigation-guards.html
          beforeEnter: (to, from, next) => {
            var id = to.query.id
            if (id === undefined) {
              next()
            } else if (store.ticketlist[id] !== undefined) {
              next()
            } else {
              alert('document doesn\'t exist')
              next(false)
            }
          }
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
