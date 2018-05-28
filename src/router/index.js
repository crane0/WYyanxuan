import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Shiwu from '../pages/Shiwu/Shiwu'
import Category from '../pages/Category/Category'
import ShopCart from '../pages/ShopCart/ShopCart'
import Personal from '../pages/Personal/Personal'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/shiwu',
      component: Shiwu
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopCart',
      component: ShopCart
    },
    {
      path: '/personal',
      component: Personal
    },
  ]
})
