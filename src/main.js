import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import SocketService from '@/utils/socket_service'
import dataV from '@jiaminghi/data-view'
import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
// 引入字体文件
import './assets/font/iconfont.css'
import './assets/css/global.less'

Vue.use(Antd)
Vue.use(dataV)

// 对服务端进行 websocket 连接
// SocketService.Instance.connect()

// axios 基准路径配置
axios.defaults.baseURL = 'http://192.168.10.114:8090/'
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
