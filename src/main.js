import Vue from 'vue'
import App from './App.vue'
import router from '@/router/Router.js'
import store from '@/store/index.js'
import '@/element-ui/element.js'
import  'element-ui/lib/theme-chalk/index.css'
import '@/mock/index.js'
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
