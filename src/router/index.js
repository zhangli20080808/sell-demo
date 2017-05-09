import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import detail from '../page/detail'

import forecast from '../page/detail/forecast'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/detail',
      component: detail,
      children:[
        {
          path: 'forecast',
          component: forecast
        }
      ]
    }
  ]
})
