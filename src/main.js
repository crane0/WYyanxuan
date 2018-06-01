import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'

Vue.use(VueLazyload, {
  loading
})

import './mock/mockServer' // 加载mockServer即可
import './filters'  //加载过滤器，否则过滤器无效！！！

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
