import Vue from 'vue'
import Router from 'vue-router'

import Projectlist from '@/components/projectlist';
import ShowPage from '@/components/ShowPage';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/AddAndModifyPage',
      component:Projectlist,
    },
    {
      path: '/',
      component:ShowPage,
    }
  ]
})
