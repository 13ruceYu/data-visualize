/*
 * @Author: bruce yu
 * @Date: 2021-01-03 19:37:33
 * @LastEditTime: 2021-02-18 22:23:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /data-visualize/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// axios 基准路径配置
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/'
// axios 全局挂载
Vue.prototype.$http = axios

// 全局 echart 挂载
Vue.prototype.$echarts = window.echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
