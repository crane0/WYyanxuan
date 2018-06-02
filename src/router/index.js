import Vue from 'vue'
import VueRouter from 'vue-router'

// import Msite from '../pages/Msite/Msite'
// import Shiwu from '../pages/Shiwu/Shiwu'
// import Category from '../pages/Category/Category'
// import ShopCart from '../pages/ShopCart/ShopCart'
// import Personal from '../pages/Personal/Personal'
// import Login from '../pages/Login/Login'
const Login = () => import('../pages/Login/Login')
const Msite = () => import('../pages/Msite/Msite')
const Shiwu = () => import('../pages/Shiwu/Shiwu')
const Category = () => import('../pages/Category/Category')
const ShopCart = () => import('../pages/ShopCart/ShopCart')
const Personal = () => import('../pages/Personal/Personal')

import InterLayer from '../pages/InterLayer/InterLayer'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/interLayer'
    },
    {
      path: '/msite',
      component: Msite,
      /*
      * 路由元信息
      * 配合App中v-show，来处理FooterGuide的显示隐藏，需要显示的路由组件，都要有
      * */
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shiwu',
      component: Shiwu,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/category',
      component: Category,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shopCart',
      component: ShopCart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/personal',
      component: Personal,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/interLayer',
      component: InterLayer
    },
  ]
})
