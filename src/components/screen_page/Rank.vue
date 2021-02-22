<!--
 * @Author: bruce yu
 * @Date: 2021-02-20 16:11:38
 * @LastEditTime: 2021-02-21 23:22:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /data-visualize/src/components/Rank.vue
-->
<template>
  <div class="comp-container">
    <div class="comp-chart" ref="rank_ref"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Rank',
  data() {
    return {
      chartInstance: null,
      allData: null,
      startValue: 0, // 区域缩放的起点值
      endValue: 9, // 区域缩放的终点值
      timerId: null
    }
  },
  computed: {
    ...mapState(['theme'])
  },
  watch: {
    theme() {
      console.log('theme 变了！')
      this.chartInstance.dispose() // 销毁当前图表
      this.initChart()
      this.screenAdapter()
      this.updateChart()
    }
  },
  created() {
    // 组件创建完成后，进行回调函数的注册
    this.$socket.registerCallBack('rankData', this.getData)
  },
  mounted() {
    this.initChart()
    // this.getData()
    this.$socket.send({
      action: 'getData',
      socketType: 'rankData',
      chartName: 'rank',
      value: ''
    })
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed() {
    clearInterval(this.timerId)
    window.removeEventListener('resize', this.screenAdapter)
    this.$socket.unRegisterCallBack('rankData')
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.rank_ref, this.theme)
      const initOption = {
        title: {
          text: '▎地区销售排行',
          left: 20,
          top: 20
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'bar'
          }
        ],
        grid: {
          top: '30%',
          right: '5%',
          bottom: '5%',
          left: '5%',
          containLabel: true
        },
        tooltip: {
          show: true
        }
      }
      this.chartInstance.setOption(initOption)
      this.chartInstance.on('mouseover', () => {
        clearInterval(this.timerId)
      })
      this.chartInstance.on('mouseout', () => {
        this.startDataZoomInterval()
      })
    },
    getData(data) {
      // const { data } = await this.$http.get('rank')
      this.allData = data
      this.updateChart()
      this.startDataZoomInterval()
    },
    updateChart() {
      // 数据从大到小排序
      this.allData.sort((a, b) => {
        return b.value - a.value
      })
      const colorArr = [
        ['#0ba82c', '#4ff778'],
        ['#2e72bf', '#23e5e5'],
        ['#5052ee', '#ab6ee5']
      ]
      // 处理图表需要的数据
      const provinceArr = this.allData.map(item => {
        return item.name
      })
      const valueArr = this.allData.map(item => {
        return item.value
      })
      const dataOption = {
        xAxis: {
          data: provinceArr
        },
        dataZoom: {
          show: false,
          startValue: this.startValue,
          endValue: this.endValue
        },
        series: [
          {
            data: valueArr,
            itemStyle: {
              color: arg => {
                let targetColorArr = null
                if (arg.value > 300) {
                  targetColorArr = colorArr[0]
                } else if (arg.value > 200) {
                  targetColorArr = colorArr[1]
                } else {
                  targetColorArr = colorArr[2]
                }
                return new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: targetColorArr[0]
                  },
                  {
                    offset: 1,
                    color: targetColorArr[1]
                  }
                ])
              }
            }
          }
        ]
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter() {
      const titleFontSize = (this.$refs.rank_ref.offsetWidth / 100) * 3.6
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: titleFontSize
          }
        },
        series: [
          {
            barWidth: titleFontSize,
            itemStyle: {
              barBorderRadius: [titleFontSize / 2, titleFontSize / 2, 0, 0]
            }
          }
        ]
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    startDataZoomInterval() {
      if (this.timerId) {
        clearInterval(this.timerId)
      }
      this.timerId = setInterval(() => {
        this.startValue++
        this.endValue++
        if (this.endValue > this.allData.length - 1) {
          this.startValue = 0
          this.endValue = 9
        }
        this.updateChart()
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped></style>
