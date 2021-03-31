import Vue from 'vue'
import Router from 'vue-router'

import Projectlist from '@/components/projectlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Projectlist
    }
  ]
})
