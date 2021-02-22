/*
 * @Author: bruce yu
 * @Date: 2021-01-03 19:37:33
 * @LastEditTime: 2021-02-21 20:14:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /data-visualize/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import SocketService from '@/utils/socket_service'
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
// 对服务端进行 websocket 连接
SocketService.Instance.connect()

// 引入字体文件
import './assets/font/iconfont.css'

// axios 基准路径配置
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/'
// axios 全局挂载
Vue.prototype.$http = axios

// 全局 echart 挂载
Vue.prototype.$echarts = window.echarts

// 全局 socket 挂载
Vue.prototype.$socket = SocketService.Instance

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
