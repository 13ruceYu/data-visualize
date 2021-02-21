/*
 * @Author: your name
 * @Date: 2021-02-21 17:43:23
 * @LastEditTime: 2021-02-21 20:52:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /data-visualize/src/utils/socket_service.js
 */
export default class SocketService {
  /**
   * 单例设计模式
   */
  static instance = null
  static get Instance () {
    if (!this.instance) {
      this.instance = new SocketService()
    }
    return this.instance
  }

  // 和服务端连接的 socket 对象
  ws = null

  // 存储回调函数(回调函数池)
  callBackMapping = {}

  // 标识是否连接成功
  connected = false

  // 记录重试次数
  sendRetryCount = 0

  // 重新连接尝试次数
  connectRetryCount = 0

  // 定义连接服务器的方法
  connect () {
    // 连接服务器
    if (!window.WebSocket) {
      return console.log('您的浏览器不支持 websocket！');
    }
    this.ws = new WebSocket('ws://localhost:9998')

    // 连接成功事件
    this.ws.onopen = () => {
      console.log('连接服务端成功！');
      this.connected = true
      // 重置重新连接的次数
      this.connectRetryCount = 0
    }

    // 1.连接失败事件
    // 2.连接成功后，服务器关闭
    this.ws.onclose = () => {
      console.log('连接服务端失败！');
      this.connected = false
      this.connectRetryCount++
      setTimeout(() => {
        this.connect()
      }, 500 * this.connectRetryCount);
    }

    // 得到服务端发来的数据
    this.ws.onmessage = msg => {
      // console.log('从服务端发来的数据: ', msg.data);
      const recvData = JSON.parse(msg.data)
      const socketType = recvData.socketType
      // 判断回调函数是否存在
      if (this.callBackMapping[socketType]) {
        const action = recvData.action
        if (action === 'getData') {
          const realData = JSON.parse(recvData.data)
          this.callBackMapping[socketType].call(this, realData)
        }
        // else if (action === 'fullScreen') {

        // } else if (action === 'themeChange') {}
      }
    }
  }

  // 回调函数注册
  registerCallBack (socketType, callBack) {
    this.callBackMapping[socketType] = callBack
  }

  // 取消某个回调函数
  unRegisterCallBack (socketType) {
    this.callBackMapping[socketType] = null
  }

  // 发送数据的方法
  send (data) {
    // 判断是否连接成功
    if (this.connect) {
      this.sendRetryCount = 0
      this.ws.send(JSON.stringify(data))
    } else {
      this.sendRetryCount++
      setTimeout(() => {
        this.send(data)
      }, this.sendRetryCount * 500);
    }
  }
}
