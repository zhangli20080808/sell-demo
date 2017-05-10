import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import detail from '../page/detail'

import forecast from '../page/detail/forecast'
import analysis from '../page/detail/analysis'
import count from '../page/detail/count'
import publish from '../page/detail/publish.vue'


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
      redirect:'/detail/count',
      children: [
				{
					path: 'analysis',
					component: analysis
				},
				{
					path: 'count',
					component: count
				},
				{
					path: 'forecast',
					component: forecast
				},
				{
					path: 'publish',
					component: publish
				}
			]
    }
  ]
})
