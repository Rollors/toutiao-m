import Vue from 'vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
// 移动端适配Vant中单位使用px，需要导入amfe-flexible，转换为rem
import 'amfe-flexible'
Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  store
}).$mount('#app')
