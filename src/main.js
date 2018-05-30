import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './mock/mockServer' // 加载mockServer即可
import './filters'  //加载过滤器，否则过滤器无效！！！

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
