import Vue from 'vue'
import format from 'date-fns/format'

//定义的data-format，使用方式 {{rating.rateTime | data-format}}
Vue.filter('data-format', function (value, formatStr='HH:mm') {
  return format(value, formatStr)
})

