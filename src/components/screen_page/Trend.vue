<!--
 * @Author: bruce yu
 * @Date: 2021-02-19 16:01:55
 * @LastEditTime: 2021-02-21 23:31:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /data-visualize/src/components/Trend.vue
-->
<template>
  <div class="comp-container">
    <div class="title" :style="compStyle">
      <span>{{ '▎' + showTitle }}</span>
      <span :style="compStyle" class="iconfont title-icon" @click="showChoice = !showChoice">&#xe6eb;</span>
      <div class="select-con" v-show="showChoice" :style="marginStyle">
        <div class="select-item" v-for="item in selectTypes" :key="item.key" @click="handleSelect(item.key)">
          {{ item.text }}
        </div>
      </div>
    </div>
    <div class="comp-chart" ref="trend_ref"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getThemeValue } from '@/utils/theme_utils'
export default {
  name: 'Trend',
  components: {},
  data() {
    return {
      chartInstance: null,
      allData: null,
      showChoice: false, // 是否显示可选项
      choiceType: 'map', // 显示的数据类型
      titleFontSize: 0 // 标题字体大小
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
    selectTypes() {
      if (!this.allData) {
        return []
      } else {
        return this.allData.type.filter(item => {
          return item.key !== this.choiceType
        })
      }
    },
    showTitle() {
      if (!this.allData) {
        return ''
      } else {
        return this.allData[this.choiceType].title
      }
    },
    compStyle() {
      return {
        fontSize: this.titleFontSize + 'px',
        color: getThemeValue(this.theme).titleColor
      }
    },
    marginStyle() {
      return {
        marginLeft: this.titleFontSize + 'px'
      }
    }
  },
  created() {
    // 组件创建完成后，进行回调函数的注册
    this.$socket.registerCallBack('trendData', this.getData)
  },
  mounted() {
    this.initChart()
    // this.getData()
    // 发送数据给服务器，
    this.$socket.send({
      action: 'getData',
      socketType: 'trendData',
      chartName: 'trend',
      value: ''
    })
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed() {
    window.removeEventListener('resize', this.screenAdapter)
    // 组件销毁时，回调函数的注销
    this.$socket.unRegisterCallBack('trendData')
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.trend_ref, this.theme)
      const initOption = {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value'
        },
        grid: {
          top: '35%',
          right: '4%',
          bottom: '3%',
          left: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          left: '3%',
          top: '15%',
          icon: 'circle'
        }
      }
      this.chartInstance.setOption(initOption)
    },
    getData(data) {
      // const { data } = await this.$http.get('trend')
      this.allData = data
      // 对 allData 赋值
      this.updateChart()
    },
    updateChart() {
      // 半透明颜色值
      const colorArr1 = [
        'rgba(11, 168, 44, 0.5)',
        'rgba(44, 110, 255, 0.5)',
        'rgba(22, 242, 217, 0.5)',
        'rgba(254, 33, 30, 0.5)',
        'rgba(250, 105, 0, 0.5)'
      ]
      // 全透明颜色值
      const colorArr2 = [
        'rgba(11, 168, 44, 0)',
        'rgba(44, 110, 255, 0)',
        'rgba(22, 242, 217, 0)',
        'rgba(254, 33, 30, 0)',
        'rgba(250, 105, 0, 0)'
      ]
      // 处理数据
      // x 轴数据
      const timeArr = this.allData.common.month
      // y 轴数据
      const valueArr = this.allData[this.choiceType].data
      const seriesArr = valueArr.map((item, index) => {
        return {
          type: 'line',
          data: item.data,
          name: item.name,
          stack: this.choiceType,
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                color: colorArr1[index],
                offset: 0
              },
              {
                color: colorArr2[index],
                offset: 1
              }
            ])
          }
        }
      })
      // 图例数据
      const legendArr = valueArr.map(item => {
        return item.name
      })
      const dataOption = {
        xAxis: {
          data: timeArr
        },
        series: seriesArr,
        legend: {
          data: legendArr
        }
      }
      this.chartInstance.setOption(dataOption)
    },
    screenAdapter() {
      this.titleFontSize = (this.$refs.trend_ref.offsetWidth / 100) * 3.6
      const adapterOption = {
        legend: {
          itemWidth: this.titleFontSize,
          itemHeight: this.titleFontSize,
          itemGap: this.titleFontSize,
          textStyle: {
            fontSize: this.titleFontSize / 2
          }
        }
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    },
    handleSelect(currentType) {
      this.choiceType = currentType
      this.updateChart()
      this.showChoice = false
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 2;
  color: #fff;
  .title-icon {
    margin-left: 10px;
    cursor: pointer;
  }
  .select-con {
    background: #232732;
    cursor: pointer;
  }
}
</style>
