<!--
 * @Author: bruce yu
 * @Date: 2021-02-20 20:17:44
 * @LastEditTime: 2021-02-21 23:29:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /data-visualize/src/components/Hot.vue
-->
<template>
  <div class="comp-container">
    <div class="comp-chart" ref="hot_ref">hot</div>
    <span class="iconfont arr-left" @click="toLeft" :style="arrStyle">&#xe6ef;</span>
    <span class="iconfont arr-right" @click="toRight" :style="arrStyle">&#xe6ed;</span>
    <span class="cat-name" :style="arrStyle">{{ catName }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getThemeValue } from '@/utils/theme_utils'
export default {
  name: 'Hot',
  data() {
    return {
      chartInstance: null,
      allData: null,
      currentPieIndex: 0, // 当前所展示的一级分类
      titleFontSize: 0
    }
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
  computed: {
    ...mapState(['theme']),
    catName() {
      if (!this.allData) {
        return ''
      } else {
        return this.allData[this.currentPieIndex].name
      }
    },
    arrStyle() {
      return {
        fontSize: this.titleFontSize + 'px',
        color: getThemeValue(this.theme).titleColor
      }
    }
  },
  created() {
    // 组件创建完成后，进行回调函数的注册
    this.$socket.registerCallBack('hotData', this.getData)
  },
  mounted() {
    this.initChart()
    // this.getData()
    this.$socket.send({
      action: 'getData',
      socketType: 'hotData',
      chartName: 'hotproduct',
      value: ''
    })
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed() {
    window.removeEventListener('resize', this.screenAdapter)
    this.$socket.unRegisterCallBack('hotData')
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.hot_ref, this.theme)
      const initOption = {
        title: {
          text: '▎热销商品占比',
          left: 20,
          top: 20
        },
        series: [
          {
            type: 'pie',
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true
              },
              labelLine: {
                show: false
              }
            }
          }
        ],
        legend: {
          top: '15%',
          icon: 'circle'
        },
        tooltip: {
          show: true,
          formatter: arg => {
            const thirdCategory = arg.data.children
            let total = 0
            thirdCategory.forEach(item => {
              total += item.value
            })
            let retStr = ''
            thirdCategory.forEach(item => {
              retStr += `${item.name}: ${parseInt((item.value / total) * 100) + '%'}<br>`
            })
            return retStr
          }
        }
      }
      this.chartInstance.setOption(initOption)
    },
    getData(data) {
      // const { data } = await this.$http.get('hotproduct')
      this.allData = data
      console.log('this.allData: ', this.allData)
      this.updateChart()
    },
    updateChart() {
      const seriesData = this.allData[this.currentPieIndex].children.map(item => {
        return {
          name: item.name,
          value: item.value,
          children: item.children
        }
      })
      const legendData = this.allData[this.currentPieIndex].children.map(item => {
        return item.name
      })
      const dataOption = {
        series: [
          {
            data: seriesData
          }
        ],
        legend: {
          data: legendData
        }
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter() {
      this.titleFontSize = (this.$refs.hot_ref.offsetWidth / 100) * 3.6
      const adapterOption = {
        title: {
          textStyle: {
            fontSize: this.titleFontSize
          }
        },
        series: [
          {
            radius: this.titleFontSize * 5.4
          }
        ],
        legend: {
          itemWidth: this.titleFontSize,
          itemHeight: this.titleFontSize,
          itemGap: this.titleFontSize / 2,
          textStyle: {
            fontSize: this.titleFontSize / 2
          }
        }
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    toLeft() {
      this.currentPieIndex--
      if (this.currentPieIndex < 0) {
        this.currentPieIndex = this.allData.length - 1
      }
      this.updateChart()
    },
    toRight() {
      this.currentPieIndex++
      if (this.currentPieIndex > this.allData.length - 1) {
        this.currentPieIndex = 0
      }
      this.updateChart()
    }
  }
}
</script>

<style lang="less" scoped>
.arr-left,
.arr-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #fff;
}

.arr-left {
  left: 10%;
}

.arr-right {
  right: 10%;
}

.cat-name {
  position: absolute;
  bottom: 20px;
  left: 80%;
  color: #fff;
}
</style>
