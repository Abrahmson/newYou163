import Vue from 'vue'
import App from './App.vue'
import router from './router'
// rem适配引入
import 'lib-flexible/flexible'
// 注册全局组件ShiwuHeader
import ShiwuHeader from './components/ShiwuHeader'
Vue.component('ShiwuHeader',ShiwuHeader)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


// new Vue({
//   el: '#app',
//   components: {
//     App
//   },
//   template: '<App/>',
//   // 注册路由器
//   router,
//   //注册仓库对象
//   // store
// })