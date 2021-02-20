<!--
 * @Author: bruce yu
 * @Date: 2021-02-09 17:31:10
 * @LastEditTime: 2021-02-20 22:21:35
 * @LastEditors: Please set LastEditors
 * @Description: 横向柱状图表
 * @FilePath: /data-visualize/src/components/Seller.vue
-->
<template>
  <div class="comp-container">
    <div class="comp-chart" ref="seller_ref">seller component</div>
  </div>
</template>

<script>
export default {
  name: 'Seller',
  components: {},
  data() {
    return {
      chartInstance: null,
      allData: null,
      currentPage: 1,
      totalPage: 0,
      timerId: null
    }
  },
  mounted() {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    // 首次加载，主动适配
    this.screenAdapter()
  },
  destroyed() {
    clearInterval(this.timerId)
    // 组件销毁，监听器取消
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    // 初始化 echartInstance 对象
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.seller_ref, 'chalk')
      // 图表初始化配置
      const initOption = {
        title: {
          text: '▎商家销售统计',
          left: 20,
          top: 20
        },
        grid: {
          top: '20%',
          right: '6%',
          bottom: '3%',
          left: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            z: 0,
            lineStyle: {
              color: '#2d3443'
            }
          }
        },
        series: [
          {
            type: 'bar',
            label: {
              show: true,
              position: 'right',
              textStyle: {
                color: 'white'
              }
            }
          }
        ],
        itemStyle: {
          color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: '#5052ee'
            },
            {
              offset: 1,
              color: '#ab6ee5'
            }
          ])
        }
      }
      this.chartInstance.setOption(initOption)
      // 图表对象的鼠标事件监听
      this.chartInstance.on('mouseover', () => {
        clearInterval(this.timerId)
      })
      this.chartInstance.on('mouseout', () => {
        this.startInterval()
      })
    },
    // 获取服务器数据
    async getData() {
      const { data } = await this.$http.get('seller')
      this.allData = data
      // 数据排序
      this.allData.sort((a, b) => {
        return a.value - b.value
      })
      this.totalPage = Math.ceil(this.allData.length / 4)
      this.updateChart()
      this.startInterval()
    },
    // 更新图表，设置 option
    updateChart() {
      const start = (this.currentPage - 1) * 5
      const end = this.currentPage * 5
      const showData = this.allData.slice(start, end)
      const sellerNames = showData.map(item => {
        return item.name
      })
      const sellerValues = showData.map(item => {
        return item.value
      })
      const dataOption = {
        yAxis: {
          data: sellerNames
        },
        series: [
          {
            data: sellerValues
          }
        ]
      }
      this.chartInstance.setOption(dataOption)
    },
    startInterval() {
      if (this.timerId) {
        clearInterval(this.timerId)
      }
      this.timerId = setInterval(() => {
        this.currentPage++
        if (this.currentPage >= this.totalPage) {
          this.currentPage = 1
        }
        this.updateChart()
      }, 3000)
    },
    // 浏览器窗口大小变化适配
    screenAdapter() {
      const titleFontSize = (this.$refs.seller_ref.offsetWidth / 100) * 3.6
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize
          }
        },
        tooltip: {
          axisPointer: {
            lineStyle: {
              width: titleFontSize
            }
          }
        },
        series: [
          {
            barWidth: titleFontSize,
            itemStyle: {
              barBorderRadius: [0, titleFontSize / 2, titleFontSize / 2, 0]
            }
          }
        ]
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  }
}
</script>

<style lang="less" scoped></style>
