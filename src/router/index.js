import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import border from '@/components/border'
import inputNum from '@/components/input-num'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/border',
      name: 'border',
      component: border
    },
    {
      path: '/inputNum',
      name: 'inputNum',
      component: inputNum
    },
  ]
})
